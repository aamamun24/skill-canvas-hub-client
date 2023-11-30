import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRequest = () => {
    const axiosSecure = useAxiosSecure()

    const { data: request = [], refetch } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/request')
            return res.data;
        }
    })

    return [request, refetch]
};

export default useRequest;