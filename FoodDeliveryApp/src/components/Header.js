import { APP_LOGO, ROHEE_IMG, DEFAULT_PROFILE_IMG } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between m-2">
            <div className="w-[10%] cursor-pointer ml-3">
                <Link to="/">
                    <img className="absolute w-56 ml-28 mt-6" src={APP_LOGO} />
                    <img src={ROHEE_IMG} />
                </Link>
            </div>
            <div className="flex items-center text-xl font-semibold">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4 hover:text-orange-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4  hover:text-orange-600">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4  hover:text-orange-600">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4  hover:text-orange-600">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4  hover:text-orange-600">Cart</li>
                    <button
                        className="px-4  hover:text-orange-600"
                        onClick={() => {setBtn(btn === "Login" ? "Logout" : "Login");}}>{btn}</button>
                    {
                        btn !== "Login" &&
                        <Profile username={loggedInUser} />
                        // <li className="font-bold">{loggedInUser}</li>
                    }
                </ul>
            </div>
        </div>
    );
};

const Profile = ({username}) => {
    return (
        <div>
            <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 text-center">
                <img className="w-7 h-7 rounded-full mx-5" src={DEFAULT_PROFILE_IMG}alt="user photo"/>
               <div class="opacity-0 hover:opacity-100 duration-300 absolute z-10 py-9 h-9 w-16">{username}</div>
            </button>
        </div>
    );
}

export default Header;