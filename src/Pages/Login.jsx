import { createContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import loginLottie from '../assets/Lottie/Animation - 1740034382511.json'

const Login = () => {
      const {user}=createContext(AuthContext)
      return (
            <div className="flex flex-col gap-10 mt-10 md:flex-row items-center justify-center min-h-screen ">
                    <div className="w-[300px] md:w-[500px]" >
                  <Lottie animationData={loginLottie}></Lottie>

            </div>
                 
            <div className="bg-[#4c3575] p-8 rounded-lg shadow-lg text-center w-[400px]">
              <h2 className="text-2xl font-bold mb-4 text-white">Welcome to TaskSync</h2>
              <p className="text-gray-400 mb-6">Effortless Task Management</p>
      
              {user ? (
                <div>
                  <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{user.displayName}</h3>
                  <p className="text-gray-500 mb-4">{user.email}</p>
                  <button
                  //   onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  // onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 bg-[#F5558D] text-white px-4 py-2 rounded-lg hover:bg-[#e04479] transition w-full"
                >
                  <FaGoogle size={24} className="text-white" /> Sign in with Google
                </button>
              )}
            </div>
          
          </div>
      );
};

export default Login;