import { CDN_RESTAURANT_URL } from "../utils/constants";
import { Review } from "./Review";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, totalRatingsString } = resData?.info;
    return (
        <div className="m-3 p-4 w-[250px] h-[350px] hover:shadow-lg rounded-lg hover:bg-gray-50" style={{ backgroundColor: "#f0f0f0f" }}>
            <img className="res-logo rounded-md object-cover  h-48 w-96" src={CDN_RESTAURANT_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-1 text-lg text-ellipsis whitespace-nowrap overflow-hidden">{name}</h3>
            <h4 className="text-ellipsis whitespace-nowrap overflow-hidden hover:overflow-visible hover:whitespace-normal">{cuisines.join(", ")}</h4>
            <Review rating={avgRating} totalRating={totalRatingsString} />
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export const withOfferedLabel = (RestaurantCard) => {
    return (props) => {
        const { resData } = props;
        const { aggregatedDiscountInfoV3 } = resData?.info;
        return (
            <div>
                <div className="absolute bg-opacity-70 bg-black text-white px-2 rounded-md m-5">{aggregatedDiscountInfoV3.header+" "+ (aggregatedDiscountInfoV3.subHeader || '')}</div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;