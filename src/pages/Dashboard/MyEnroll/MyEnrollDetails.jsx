import { useParams } from "react-router-dom";
import useClass from "../../../hooks/useClass";

const MyEnrollDetails = () => {

    const [classes] = useClass()
    const { id } = useParams()
    const classDetails = classes.find(item => item._id === id)
    return (
        <div>
            {/* TODO */}
            <h2>{classDetails?.title}</h2>
        </div>
    );
};

export default MyEnrollDetails;