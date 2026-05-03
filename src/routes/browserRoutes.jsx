import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import ProductsPage from "../pages/ProductsPage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import InventoryPage from "../pages/InventoryPage"
import ErrorPage from "../pages/ErrorPage"
import CartPage from "../pages/CartPage"
import AppLayout from "../Layout/AppLayout"
import UnAuthorizedPage from "../pages/UnAuthorizedPage"

export const routes = createBrowserRouter([
    {
        path:"/" ,
        element:<AppLayout/>,
        children : [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"products",
                element:<ProductsPage/>
            },
            {
                path:"login",
                element : <LoginPage/>
            },
            {
                path:"signup",
                element:<SignUpPage/>
            },
            {
                path:"cart",
                element:<CartPage/>
            },
            {
                path:"inventory",
                element:<InventoryPage/>
            },
            {
                path:"not-authorized",
                element:<UnAuthorizedPage/>
            },
            {
                path:"*",
                element:<ErrorPage/>
            }
        ]

    }
])