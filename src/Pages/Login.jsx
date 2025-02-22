import {  useContext } from "react";
import {  useLocation, useNavigate } from 'react-router-dom'

import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import loginLottie from '../assets/Lottie/Animation - 1740034382511.json'

import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

//import Swal from "sweetalert2";


const Login = () => {
      const {signInWithGoogle}=useContext(AuthContext)
      const location=useLocation()
      console.log(location)
      const navigate=useNavigate()
      const saveUser = async user => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const axiosPublic = useAxiosPublic(); 
        await axiosPublic.post(`/users/${user?.email}`, {
          uid: user?.uid, 
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        })
      }
 

      // Handle Google Signin
  const handleGoogleSignIn = async () => {
      try {
        //User Registration using google
        const data = await signInWithGoogle()
        console.log(data?.user)
        // save user info in db if the user is new
       await saveUser(data?.user)
       //alert("login successfull")
       Swal.fire({
            title: "Login Successful!",
            text: `Welcome, ${data?.user?.displayName}!`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
       
        navigate('/home')
        
      } catch (err) {
        console.log(err)
        //alert(err)
        Swal.fire({
                          title: "Error",
                          text: "There was an error in login. Please try again.",
                          icon: "error",
                    });
        
        
        
      }
    }
      return (
           <div className="min-h-screen container mx-auto w-[90%]">
            <h1 className="text-center pt-8 pb-4 text-xl font-bold md:text-4xl text-[#4c3575]">Welcome to TaskSync!</h1>
            <p className="text-center text-xs md:text-xl">Manage your tasks effortlessly. Please log in to get started.</p>
             <div className="flex flex-col gap-10 mt-10  md:flex-row items-center justify-center mb-8  ">
                 
                  
                 <div className="w-[300px] md:w-[500px]" >
               <Lottie animationData={loginLottie}></Lottie>

         </div>
              
         <div className="bg-[#4c3575] p-8 rounded-lg shadow-lg text-center w-[330px] md:w-[400px]">
           <h2 className="text-2xl font-bold mb-4 text-white">Welcome to TaskSync</h2>
           <p className="text-gray-400 mb-6">Effortless Task Management</p>
   
           
             <button
             onClick={handleGoogleSignIn}
               className="flex items-center justify-center gap-2 bg-[#F5558D] text-white px-4 py-2 rounded-lg hover:bg-[#e04479] transition w-full"
             >
               <FaGoogle size={24} className="text-white" /> Sign in with Google
             </button>
         
         </div>
       
       </div>
           </div>


      );
};

export default Login;