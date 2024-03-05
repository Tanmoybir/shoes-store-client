import { Outlet } from "react-router-dom";
import { NavbarWithSearch } from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <NavbarWithSearch/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;