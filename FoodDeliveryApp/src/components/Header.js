import { APP_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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