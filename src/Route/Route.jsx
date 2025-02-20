import { createBrowserRouter } from "react-router-dom"
import Root from "../Main_Layout/Root"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"


const Route = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>
            },
            {
                  path:"/about",
                  element:<AboutUs></AboutUs>
            },
            {
                  path:"/contact",
                  element:<Contact></Contact>
            },
            {
                  path:"/login",
                  element:<Login></Login>
            },
        ]
        
            
      }   
])
export default Route


