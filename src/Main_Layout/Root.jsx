import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";


const Root = () => {
      const location=useLocation()
      return (
           
            <div id="root" className="">
                  {location.pathname !== '/' && <Navbar />}
                  
                  <div className="min-h-[calc(100vh-269px)]">
                  <Outlet></Outlet>

                  </div>
                  
                  <Footer></Footer>
                  
            </div>
      );
};

export default Root;