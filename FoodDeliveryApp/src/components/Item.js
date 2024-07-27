import { CDN_RESTAURANT_URL } from "../utils/constants";
import { Review } from "./Review";

export const Item = ({ data }) => {
    // console.log(data)
    return (
        <div className="mb-5 pb-8 flex justify-between border-b-2 border-gray-300">
            <div className="w-9/12">
                <p className="font-bold">{data.name}</p>
                <p className="font-bold mb-2">&#8377; {data.price ? data.price /100 : data.defaultPrice / 100}</p>
                { 
                    data.ratings.aggregatedRating?.rating != undefined ?
                        <Review rating={data.ratings.aggregatedRating?.rating} totalRating={data.ratings.aggregatedRating?.ratingCountV2}
                        /> : ``
                }
                <p className="mt-3 text-sm text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden hover:overflow-visible hover:whitespace-normal">{data.description}</p>
            </div>
            <div className="w-3/12 ml-2">
                <div className="absolute mx-12 my-[90px]">
                    <button type="button" className="font-extrabold text-green-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 rounded-lg text-sm px-6 py-2 me-2 mb-2 shadow-md">ADD</button>
                </div>
                <img className="object-cover w-44 h-28 rounded-lg" src={CDN_RESTAURANT_URL + data.imageId} />
            </div>
        </div>
    );
}