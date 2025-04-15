import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import User from "./pages/User"
import Admin from "./pages/Admin"
import NotFoundPage from "./pages/NotFoundPage"
import AllUsers from "./pages/AllUsers"
 
export const PublicRoutes = [
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/signup",
        element : <Signup/>
    },
];

export const AdminRoutes = [
    {
        path : "/",
        element : <Admin/>
    },
    {
        path : "/admin",
        element : <Admin/>
    },
    {
        path : "/allusers",
        element : <AllUsers/>
    }
];

export const UserRoutes = [
    {
        path : "/",
        element : <User/>
    },
    {
        path : "/user",
        element : <User/>
    },
];

export const ExtraRoutes = [
    {
        path : "*",
        element : <NotFoundPage/>
    },
    {
        path : "/notfound",
        element : <NotFoundPage/>
    }
]