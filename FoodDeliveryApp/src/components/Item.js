import { ITEM_IMG_URL } from "../utils/constants";
import { Review } from "./Review";

export const Item = ({ data }) => {
    // console.log(data)
    return (
        <div className="my-5 pb-5 flex justify-between border-b-2 border-gray-300">
            <div className="w-9/12">
                <p className="font-bold">{data.name}</p>
                <p className="font-bold mb-2">&#8377; {data.price / 100}</p>
                { 
                    data.ratings.aggregatedRating?.rating != undefined ?
                        <Review rating={data.ratings.aggregatedRating?.rating} totalRating={data.ratings.aggregatedRating?.ratingCountV2}
                        /> : ``
                }
                <p className="mt-3 text-sm text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden hover:overflow-visible hover:whitespace-normal">{data.description}</p>
            </div>
            <img className="object-cover w-44 h-28 rounded-lg" src={ ITEM_IMG_URL + data.imageId} />
        </div>
    );
}