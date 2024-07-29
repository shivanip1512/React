import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import { Cart } from "./components/Cart/Cart";

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

const Favorites = lazy(() => import("./components/Favorites"));
const About = lazy(()=>import("./components/About"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(
        () => {
            // make API call to aunthenticate
            const data = {
                name : "Shivani Pacharne"
            };
            setUserName(data.name);
        },[]
    );

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: "favourites",
                element:
                    <Suspense
                    fallback={<h1>Loading Grocery...</h1>}>
                        <Favorites />
                    </Suspense>,
            },
            {
                path: "/cart",
                element: <Cart/>,
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