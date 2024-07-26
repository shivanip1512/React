import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    const handleAccordian = () => {
        setShowIndex()
    }

    return (
        <div className="cursor-pointer rounded-md w-auto shadow-lg my-2" onClick={handleAccordian}>
            <div className="flex justify-between p-4 bg-gray-50">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="text-xl font-bold">+</span>
            </div>
            {
                showItems &&
                <ItemList key={data.itemCards.id} items={data.itemCards} /> 
            }
        </div>
    );
};