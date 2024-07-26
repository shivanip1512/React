import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data }) => {
    
    const [showItems, setShowItems] = useState(false);

    const handleAccordian = () => {
        setShowItems(!showItems)
    }

    return (
        <div className="rounded-md w-6/12 w-auto shadow-lg my-2">
            <div className="flex justify-between p-4 bg-gray-50">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="cursor-pointer text-xl font-bold" onClick={handleAccordian}>+</span>
            </div>
            {
                showItems &&
                <ItemList key={data.itemCards.id} items={data.itemCards} /> 
            }
        </div>
    );
};