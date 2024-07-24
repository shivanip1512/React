import { ItemList } from "./ItemList";

export const RestaurantCategory = ({data}) => {
    // console.log(data)
    return (
        <div  className="rounded-md w-6/12 w-auto shadow-lg ">
            <div className="flex justify-between p-4 bg-gray-50">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>+</span>
            </div>
            <ItemList key={data.itemCards.id} items={data.itemCards} />
        </div>
    );
};