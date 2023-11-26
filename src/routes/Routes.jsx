import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from '../layouts/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;