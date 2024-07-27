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
            <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img className="w-8 h-8 rounded-full" src={DEFAULT_PROFILE_IMG}alt="user photo"/>
            </button>
             <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{username}</span>
            </div>
      </div>
        </div>
    );
}

export default Header;