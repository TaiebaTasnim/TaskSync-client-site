import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4c3575] text-white pt-8 pb-4">
      <div className="container mx-auto w-[90%] flex flex-col md:flex-row justify-between  text-center md:text-left">
        
        {/* Site Name */}
        <div className=" md:w-[50%] ">
          <h2 className="text-2xl font-bold text-[#F5558D]">TaskSync</h2>
          <p className="text-lg font-semibold  mt-1 ">
            Effortless Task Management 
          </p>
          <p className="text-sm opacity-80 mt-2 md:w-[60%]">
            From planning to completion, streamline your workflow with intuitive task tracking and real-time updates.
          </p>
        </div>

        {/* Services */}
        <div className="mt-6 md:mt-0 md:w-[50%]">
          <h3 className="text-lg font-semibold text-[#F5558D]">Services</h3>
          <ul className="mt-2 space-y-1">
            <li>✔ Task Add, Edit & Delete</li>
            <li>✔ Drag & Drop Functionality</li>
            <li>✔ Task Reordering</li>
            <li>✔ Real-time Updates</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-6 md:mt-0 ">
          <h3 className="text-lg font-semibold text-[#F5558D]">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className=" text-2xl hover:opacity-80">
              <FaGithub />
            </a>
            <a href="#" className=" text-2xl hover:opacity-80">
              <FaTwitter />
            </a>
            <a href="#" className=" text-2xl hover:opacity-80">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
       {/* Divider */}
       <div className="border-t border-[#F5558D] w-[90%] mx-auto my-6"></div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm opacity-80">
        © {new Date().getFullYear()} TaskSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
