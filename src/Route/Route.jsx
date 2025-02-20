import { createBrowserRouter } from "react-router-dom"
import Root from "../Main_Layout/Root"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home"


const Route = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>
            }
        ]
        
            
      }   
])
export default Route


