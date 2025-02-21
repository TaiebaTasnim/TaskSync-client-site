import { Outlet, useNavigate } from "react-router-dom";
import { FaBars,  FaHome,  FaLock, FaPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// import { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
//import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
//import { Helmet } from "react-helmet";





const Dashboard = () => {
    
//     const { user, signout } = useContext(AuthContext)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {signout}=useContext(AuthContext)
    const navigate=useNavigate()
  const handlesignout = () => {
      signout()
        .then(() => {
          //alert("Logged out successfully");
          Swal.fire({
                                title: "Logout Successful!",
                                icon: "success",
                                timer: 2000,
                                showConfirmButton: false,
                              });

          navigate("/")
        })
        .catch((error) => {
            console.log(error)
          //alert(`Logout failed: ${error.message}`);
          Swal.fire({
                                              title: "Error",
                                              text: "There was an error in logout. Please try again.",
                                              icon: "error",
                                        });
        });
    };
//     const [dark,setDark]=useState(false)
//     const darkModehandler=()=>{
//       setDark(!dark)
//       document.body.classList.toggle('dark')
//     }


    //const navigate = useNavigate()

//     const handlesignout = () => {
//         signout()
//             .then(() => {
//                 toast.success("Logged out successfully");
//                 navigate("/login")
//             })
//             .catch((error) => {
//                 toast.error(`Logout failed: ${error.message}`);
//             });
//     };
    const handleNavLinkClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="relative min-h-screen flex bg-white">
  {/* <Helmet><title>FitMe | Dashboard</title></Helmet> */}

  {!isSidebarOpen && (
    <button 
      className="absolute top-4 left-4 lg:hidden text-2xl z-50 " 
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FaBars />
    </button>
  )}

  {/* Sidebar */}
  <div className={`min-h-screen bg-[#4c3575] pt-6 fixed lg:relative w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40`}>
    <div className="flex  items-center space-x-10 pl-6 mb-6">
      
     
      <span className="text-2xl font-semibold text-[#F5556D]">TaskSync</span>

    
      
     
     
    </div>
    {/* Navigation Links */}
   
      <ul className="pl-6 space-y-5 text-white">
        <li className="flex items-center gap-2 font-display">
          <NavLink to="/dashboard/tasks" onClick={handleNavLinkClick}>
            <div className="flex gap-2 items-center">
            <FaPlus></FaPlus>Create Task
            </div>
          </NavLink>
        </li>
        
         
        <li className="flex items-center gap-2 font-display">
                       
                       <NavLink to='/dashboard/manageTasks'  onClick={handleNavLinkClick}>
                             Manage Task 
                         </NavLink>
                     </li>
                     
        <div className="w-52 h-[2px] bg-white my-6"></div>
        <li className="flex items-center gap-2 font-display">
                        <FaHome />
                        <NavLink to="/home" onClick={handleNavLinkClick}>
                            Home 
                        </NavLink>
                    </li>
        
        <li className="flex items-center gap-2 font-display">
          <FaLock />
          
          <NavLink  onClick={handlesignout}>
                            Log Out
                        </NavLink>
            
        </li>
      </ul>
    
     
                
  </div>

  {/* Dashboard Content */}
  <div className=" min-h-screen overflow-y-auto flex-1 font-display">
  <div className="lg:ml-6  p-3">
    <Outlet />
  </div>

  </div>
  

  
  
</div>



    );
};

export default Dashboard;