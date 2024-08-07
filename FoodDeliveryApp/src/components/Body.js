import RestaurantCard, {withOfferedLabel} from "./RestaurantCard";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

let restaurantData;

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [searchText, setSearchText] = useState("");

    const OfferedRestaurantCard = withOfferedLabel(RestaurantCard);
    const {loggedInUser, setUserName} = useContext(UserContext);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        restaurantData = json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
        setListOfRestaurant(restaurantData);
    };

    const onlineStatus = useOnlineStatus();
    
    if (onlineStatus === false)
        return (
            <h1>Looks like you are offline!! Please check your internet connection.</h1>
        );

    // Conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer /> :
        (
            <div className="body">
               
                <div className="flex justify-between">
                    <div className="search m-4 p-4 w-3/12">
                        <input
                            type="text"
                            className="border rounded-md border-black p-1"
                            value={searchText}
                            placeholder="Search Restaurant"
                            onChange=
                            {
                                (e) => { setSearchText(e.target.value) }
                            }
                        />
                        <button className="bg-green-100 px-4 py-1 m-4 rounded-md" onClick={
                            () => {
                                //filter restaurant cards and update UI
                                const searchFilter = restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setListOfRestaurant(searchFilter);
                            }
                        }>Search</button>
                    </div>
                    <div className=" m-4 p-4 flex items-center w-6/12">
                        <button
                        className={"px-4 py-1 bg-gray-100 rounded-md" + (isSelected ? " selected":"")}
                        onClick={() => {
                            if (!isSelected) {
                                // Filter Logic here
                                const filteredList = listOfRestaurant.filter(
                                    (res) => res.info.avgRating > 4.3
                                );
                                setListOfRestaurant(filteredList);
                                setIsSelected(true);
                            } else {
                                setListOfRestaurant(restaurantData);
                                setIsSelected(false);
                            }
                            }}>Top Restaurants</button> 
                    </div>
                    <div className="m-4 p-4 w-2/12">
                        <label>Username : </label>
                        <input type="text"
                            className="border rounded-md border-black p-1"
                            placeholder="UserName"
                            value={loggedInUser}
                            onChange={(e)=> setUserName(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div
                    className="res-container
                                flex flex-wrap
                                justify-center">
                    {
                        listOfRestaurant.map(restaurant =>
                            (
                            <Link key={restaurant.info.id} className="link"
                                to={"/restaurants/" + restaurant.info.id}>
                                {
                                     restaurant.info.aggregatedDiscountInfoV3 == undefined ?
                                    <RestaurantCard resData={restaurant} /> : <OfferedRestaurantCard resData={restaurant} />
                                }
                            </Link>
                            )
                        )
                    }
                </div>
            </div>
        );
};

export default Body;