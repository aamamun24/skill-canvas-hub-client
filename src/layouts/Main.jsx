import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;