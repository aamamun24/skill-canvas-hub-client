import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAcceptedClass from "../../hooks/useAcceptedClass";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate()

    const [classes] = useAcceptedClass()
    const { id } = useParams()
    const singleClass = classes.find(item => item._id === id)
    const classPrice = parseFloat(singleClass?.price)

    useEffect(() => {
        if (classPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: classPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, classPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user.email || 'anonymous'
                }
            }
        })
        if (confirmError) {
            // console.log('confirm error', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    classId: singleClass?._id
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment', res.data);
                if (res?.data?.insertedId) {

                    const res = await axiosSecure.put(`/class/${singleClass._id}/enroll`)
                    console.log('enroll', res.data);
                    if (res.data.modifiedCount > 0) {
                        toast.success('Payment completed successfully')
                    }
                }
                navigate('/dashboard/my-enroll')
            }
        }
    }

    return (
        <div className="bg-gray-200 p-10 rounded-md">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-secondary my-3" type="submit" disabled={!stripe || !clientSecret}>
                    Payment
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId && <p className="text-green-500">Your Transaction Id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;