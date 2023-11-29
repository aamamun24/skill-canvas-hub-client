import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRequest = () => {
    const axiosSecure = useAxiosSecure()

    const { data: requestRes = [], refetch } = useQuery({
        queryKey: ['requestRes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/request')
            return res.data;
        }
    })

    return [requestRes, refetch]
};

export default useRequest;