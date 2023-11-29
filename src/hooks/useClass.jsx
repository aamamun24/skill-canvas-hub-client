import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const axiosPublic = useAxiosPublic()

    const { data: classes = [], isPending: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/class')
            return res.data;
        }
    })

    return [classes, loading, refetch]
};

export default useClass;