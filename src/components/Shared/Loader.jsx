import { RingLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <RingLoader color="#FD661F" />
        </div >
    );
};

export default Loader;