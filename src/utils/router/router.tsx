import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/test",
        element: <div>HEHE DIBIL</div>,
    },
]);

export default router