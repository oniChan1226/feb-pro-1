import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import allRoutes from "./AllRoutes"


const Router = () => {
    console.log("Router");

    const roleRoutes = allRoutes["auth"] || [];

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                { roleRoutes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element} />
                )) }
            </Route>
        )
    )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router