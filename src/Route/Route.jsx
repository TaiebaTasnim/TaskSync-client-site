import { createBrowserRouter } from "react-router-dom"
import Root from "../Main_Layout/Root"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"
import Dashboard from "../Main_Layout/Dashboard"
import TaskForm from "../Pages/DashboardPage/TaskForm"
import ManageTasks from "../Pages/DashboardPage/ManageTasks"
import PrivateRoute from "../Private/PrivateRoute"



const Route = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:"/",
                  element:<Login></Login>
            },
            {
                  path:"/home",
                  element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                  path:"/about",
                  element:<AboutUs></AboutUs>
            },
            {
                  path:"/contact",
                  element:<Contact></Contact>
            },
            
        ]
        
            
      },
      {
            path:'/dashboard',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'tasks',
                        element:<TaskForm></TaskForm>
                  },
                  {
                        path:'manageTasks',
                        element:<ManageTasks></ManageTasks>
                  },
                  

            ]
            

      }   
])
export default Route


