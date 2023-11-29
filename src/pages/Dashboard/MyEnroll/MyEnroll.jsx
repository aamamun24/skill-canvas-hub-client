import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClass from "../../../hooks/useClass";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

const MyEnroll = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [classes] = useClass()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })

    const matchClasses = classes.filter(item => payments.some(payment => payment.classId === item._id));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                matchClasses.map(item => <div key={item?._id} className="rounded-lg min-w-fit shadow-lg bg-white">
                    <div>
                        <img className='rounded-t-md w-full' src={item?.image} alt="" />
                    </div>
                    <div className='p-4 rounded-b-md'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-10 h-10 object-cover rounded-full' src={item?.image} alt="" />
                            <p className='font-medium'>{item?.name}</p>
                        </div>
                        <h2 className='text-xl text-[#252641] font-bold my-2'>{item?.title}</h2>
                        <div className='flex justify-between items-center'>
                            <Link to={`${item?._id}`} > <Button text='Continue' /></Link>
                        </div>
                    </div>
                </div >)
            }
        </div>
    );
};

export default MyEnroll;