
import LazyWrapper from "./LazyWrapper";
const Signin = LazyWrapper(() => import("../pages/auth/Signin"))
const Signup = LazyWrapper(() => import("../pages/auth/Signup"))


const allRoutes = {
    auth: [
        { path: "/", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
    ]
    // admin: [
    //   { path: '/admin', element: <AdminDashboard /> },
    //   { path: '/settings', element: <div>Admin Settings</div> },
    // ],
    // user: [
    //   { path: '/user', element: <UserDashboard /> },
    //   { path: '/profile', element: <div>User Profile</div> },
    // ],
  };

  export default allRoutes;