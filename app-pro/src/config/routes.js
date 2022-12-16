import Login from "../pages/login";
import User from "../pages/user";

const routes = [
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/User',
        element:<User/>
    }
]

export default routes