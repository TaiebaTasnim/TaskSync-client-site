
import { useNavigate, useRouteError } from "react-router-dom";



const ErrorPage = () => {
      const error=useRouteError()
      const navigate=useNavigate()
      return (
            <div className='flex flex-col justify-center items-center min-h-screen gap-2 bg-white dark:bg-black'>
            
            {/* <div >
                  <Lottie animationData={errorlottie}></Lottie>

            </div> */}
            <h1 className='text-4xl text-black dark:text-white'>Ooops!!!</h1>
            <p className='text-black dark:text-white'>Sorry, an unexpected error has occurred.</p>
           <p className='text-black dark:text-white'>
              <i>{error.statusText || error.message} </i>
          </p>
          <button onClick={()=>navigate('/home')} className="mt-6 px-6 py-3 text-lg font-semibold bg-[#F5558D] rounded-lg hover:bg-[#e04a7a] transition">
              Go Back
            </button>
          
      </div>
      );
};

export default ErrorPage;