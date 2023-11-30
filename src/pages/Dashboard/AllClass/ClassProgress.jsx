import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ClassProgress = () => {
    const axiosPublic = useAxiosPublic()

    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedback')
            return res.data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    <thead className='bg-[#FD661F] text-white uppercase font-semibold'>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedback.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>{item?.title}</td>
                                <td>{item?.name}</td>
                                <td>{item?.rating}</td>
                                <td>{item?.description}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassProgress;