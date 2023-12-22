import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../pages/HomePage";
console.log('hehe')
const router = createBrowserRouter([
    {path: "/", element: <HomePage/>,},
]);

export default router