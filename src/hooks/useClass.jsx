import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    const axiosSecure = useAxiosSecure()

    const { data: classes = [], isPending: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/class')
            return res.data;
        }
    })

    return [classes, loading, refetch]
};

export default useClass;