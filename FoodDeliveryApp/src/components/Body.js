import  RestaurantCard  from "./RestaurantCard";
import restraunts from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // State variable
    const [listOfRestaurant, setListOfRestaurant] = useState(restraunts);

    // Normal variable
    // let listOfRestaurant;
    
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