import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";

const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
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
            }
        ]
    }
])

export default myCreateRoute;