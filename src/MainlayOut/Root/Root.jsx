import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;