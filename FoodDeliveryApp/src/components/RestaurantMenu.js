import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ShimmerCard } from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null)
        return <ShimmerCard />;

    const { avgRating, cuisines, costForTwoMessage, name } = resInfo?.cards[2]?.card?.card?.info;
    const {title, carousel} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //  console.log(carousel)

    return (
        <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <p>{avgRating} Ratings</p>
                <h2>{title}</h2>
            <ul>
                {
                    carousel.map(dish => (
                        <li key={dish.dish.info.id}>{dish.dish.info.name} - &#8377;{dish.dish.info.price / 100}</li>)
                    )
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;