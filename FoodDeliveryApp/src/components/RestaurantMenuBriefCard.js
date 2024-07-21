import { Review } from "./Review";

export const RestaurantMenuBriefCard = ({ briefCard }) => {
    const { avgRating, cuisines, costForTwoMessage, name, totalRatingsString, areaName, feeDetails, sla } = briefCard;
    return (
        <div className="border rounded-xl shadow-xl">
                <div className="px-4 pt-4">
                    <Review rating={avgRating} totalRating={totalRatingsString} costForTwo={costForTwoMessage}/>
                    <p className="font-bold text-sm text-orange-500 underline">{cuisines.join(", ")}</p>
                    <div className="text-sm m-3">
                        <p>
                            <span className="font-bold">Outlet</span>
                            <span className="ml-3">{areaName}</span>
                        </p>
                        <p className="mt-1">{sla.slaString.toLowerCase()}</p>
                    </div>
            </div>
            {
                feeDetails?.message !== undefined ? <FeeDetails details={feeDetails} /> : ``}
            </div>
    );
}

const FeeDetails = ({details}) => {
    return (
        <div>
            <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <p className="px-4 pb-4 pt-1 text-sm">{details?.message}</p>
        </div>
    );
}