import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { RestaurantMenuBriefCard } from "./RestaurantMenuBriefCard";
import { ShimmerCard } from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null)
        return <ShimmerCard />;

    console.log(resInfo?.cards[2]?.card?.card?.info);
    const {name} = resInfo?.cards[2]?.card?.card?.info;
    const itemCategories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
            filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(itemCategories.length)
    return (
        <div className="mx-96">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <RestaurantMenuBriefCard briefCard={resInfo?.cards[2]?.card?.card?.info} />
            <div className="mt-10">
            {
                itemCategories.map((category) => (
                    <RestaurantCategory/>
                ))
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;