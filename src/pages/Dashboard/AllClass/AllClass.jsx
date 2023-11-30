import useClass from '../../../hooks/useClass';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const AllClass = () => {
    const [classes, , refetch] = useClass()
    const axiosSecure = useAxiosSecure()

    const handleApprove = (id) => {
        axiosSecure.put(`/class/${id}/accept`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('Class Approved')
                }
            })
    }

    const handleReject = id => {
        axiosSecure.put(`/class/${id}/reject`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('Class rejected')
                }
            })
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">All Users: {classes.length}</h2>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    <thead className='bg-[#FD661F] text-white uppercase font-semibold'>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Teacher Email</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>{item?.title}</td>
                                <td><img src={item?.image} className='w-20 h-20 object-cover' alt="" /></td>
                                <td>{item?.email}</td>
                                <td>{item?.title}</td>
                                <td>
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleApprove(item?._id)}
                                        className="btn btn-sm btn-success">Approve</button>
                                </td>
                                <td>
                                    <button
                                        disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                        onClick={() => handleReject(item?._id)}
                                        className="btn btn-sm btn-warning">Reject</button>
                                </td>
                                <td>{
                                    item?.status === 'pending' || item?.status === 'rejected' ?
                                        <button className="btn btn-sm btn-disabled">See Progress</button>
                                        :
                                        <Link to={`/dashboard/class/${item?._id}`} className='btn btn-sm btn-info'>See Progress</Link>
                                }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClass;