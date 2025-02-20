import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";


const Root = () => {
      return (
            <div id="root" className="">
                  <Navbar></Navbar>
                  <div className="min-h-[calc(100vh-269px)]">
                  <Outlet></Outlet>

                  </div>
                  
                  <Footer></Footer>
                  
            </div>
      );
};

export default Root;