import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* Your app content */}
        </>
    )
}
export default Layout;