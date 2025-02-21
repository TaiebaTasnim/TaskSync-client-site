import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    //console.log(user,loading)
    const location=useLocation()
    

    if(loading){
      
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/" state={{from:location}} ></Navigate>
};

export default PrivateRoute;