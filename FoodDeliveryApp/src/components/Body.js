import  RestaurantCard  from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
    };

    if (listOfRestaurant.length === 0) {
        return (
            <Shimmer/>
        );
    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Filter Logic here
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                }}>4+ Ratings</button> 
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant =>
                        (
                            <RestaurantCard key={restaurant.info.id}
                                resData={restaurant} />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Body;