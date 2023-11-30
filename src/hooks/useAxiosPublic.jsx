import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://skillcanvashub.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;