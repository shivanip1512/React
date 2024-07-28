import { APP_LOGO, ROHEE_IMG, DEFAULT_PROFILE_IMG } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    
    // Subscribing to store using a Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between m-2">
            <div className="w-[10%] cursor-pointer ml-3">
                <Link to="/">
                    <img className="absolute w-56 ml-28 mt-6" src={APP_LOGO} />
                    <img className="rounded-2xl" src={ROHEE_IMG} />
                </Link>
            </div>
            <div className="flex items-center text-xl font-semibold">
                <ul className="flex p-4 m-4">
                    <li className="px-4 mt-5">
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4 mt-5 hover:text-orange-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 mt-5 hover:text-orange-600">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 mt-5 hover:text-orange-600">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 mt-5 hover:text-orange-600">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button
                        className="px-4 mt-3 hover:text-orange-600"
                        onClick={() => {setBtn(btn === "Login" ? "Logout" : "Login");}}>{btn}</button>
                    {
                        btn !== "Login" &&
                        <Profile username={loggedInUser} />
                        // <li className="font-bold">{loggedInUser}</li>
                    }
                    <Cart items={cartItems.length}/>
                </ul>
            </div>
        </div>
    );
};

const Profile = ({username}) => {
    return (
        <div>
            <button type="button" className="fle text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 text-center">
                <img className="w-7 h-7 rounded-full mx-5" src={DEFAULT_PROFILE_IMG}alt="user photo"/>
               <div className="opacity-0 hover:opacity-100 duration-300 absolute z-10 py-9 h-9 w-16">{username}</div>
            </button>
        </div>
    );
}

const Cart = ({items}) => {
    return (
        <div className="cart flex justify-center items-center">
            <Link to="/cart">
                <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{items}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}

export default Header;