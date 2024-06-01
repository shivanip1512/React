import  RestaurantCard  from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let restaurantData;

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [searchText, setSearchText] = useState("");
    
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


    // Conditional rendering
    return listOfRestaurant.length === 0 ? <Shimmer /> :
        (
            <div className="body">
               
                <div className="filter">
                    <div className="search">
                        <input
                            type="text"
                            className="search-box"
                            value={searchText}
                            onChange=
                            {
                                (e) => { setSearchText(e.target.value) }
                            }
                        />
                        <button onClick={
                            () => {
                                //filter restaurant cards and update UI
                                const searchFilter = restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setListOfRestaurant(searchFilter);
                            }
                        }>Search</button>
                    </div>
                    <button
                        className={"filter-btn" + (isSelected ? " selected":"")}
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
                    }}>4+ Ratings</button> 
                </div>
                <div className="res-container">
                    {
                        listOfRestaurant.map(restaurant =>
                            (
                            <Link key={restaurant.info.id} className="link"
                                to={"/restaurants/" + restaurant.info.id}>
                                    <RestaurantCard resData={restaurant} />
                            </Link>
                            )
                        )
                    }
                </div>
            </div>
        );
};

export default Body;