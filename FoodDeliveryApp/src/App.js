import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

/* 
PERFORMANCE IMPROVEMENT -
Chunking , 
Code splitting,
Dynamic bundlling,
lazy loading,
on demand loading,
dynamic import
*/
// import Grocery from "./components/Grocery";
// import About from "./components/About";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element:
                    <Suspense
                    fallback={<h1>Loading About...</h1>}>
                        <About />
                    </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "grocery",
                element:
                    <Suspense
                    fallback={<h1>Loading Grocery...</h1>}>
                        <Grocery />
                    </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);