import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <LoginBtn/>
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