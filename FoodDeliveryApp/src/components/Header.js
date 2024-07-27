import { APP_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between m-2">
            <div className="logo-container">
                <img className="w-56" src={APP_LOGO} />
                <h1 className="flex justify-center font-serif font-extrabold text-lg">Food Delivery App</h1>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <LoginBtn />
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

const LoginBtn = () => {
    const [btn, setBtn] = useState("Login");
    return (
        <button
            className="login-btn"
            onClick={() => {setBtn(btn === "Login" ? "Logout" : "Login");}}>{btn}</button>
    );
};

export default Header;