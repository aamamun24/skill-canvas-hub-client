import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRequest from "../../../hooks/useRequest";
import Swal from "sweetalert2";
import toast from 'react-hot-toast';

const TeacherRequest = () => {
    const [request, refetch] = useRequest();
    const axiosSecure = useAxiosSecure()

    const handleApprove = (userId, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make teacher?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Teacher"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.put(`/users/${userId}/teacher`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {

                            axiosSecure.put(`/request/${id}/accept`)
                                .then(res => {
                                    if (res.data.modifiedCount > 0) {
                                        refetch()
                                        Swal.fire({
                                            title: "Teacher!",
                                            text: 'He is teacher now.',
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    })
            }
        });
    }

    const handleReject = id => {
        axiosSecure.put(`/request/${id}/reject`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('Request rejected')
                }
            })
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Total Request: {request.length}</h2>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    <thead className='bg-[#FD661F] text-white uppercase font-semibold'>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td><img src={item?.image} className='w-20 h-20 object-cover' alt="" /></td>
                                <td>{item?.name}</td>
                                <td>{item?.experience}</td>
                                <td>{item?.title}</td>
                                <td>{item?.category}</td>
                                <td>
                                    {item?.status}
                                </td>
                                <td>
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleApprove(item.userId, item._id)}
                                        className="btn btn-sm btn-success">Approve</button>
                                </td>
                                <td>
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item._id)}
                                        className="btn btn-sm btn-warning">Reject</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default TeacherRequest;