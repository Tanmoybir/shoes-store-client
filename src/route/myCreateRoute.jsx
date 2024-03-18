import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Details from "../pages/Shop/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/shoeDetails/:id',
                element:<Details/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    
])

export default myCreateRoute;