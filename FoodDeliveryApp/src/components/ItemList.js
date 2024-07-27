import { Item } from "./Item";

export const ItemList = ({ items }) => {
    // console.log(items)
    return (
        <div className="mb-2 p-4">
                {items.map(item => 
                    <Item key={item.card.info.id} data={item.card.info}/>
                )}
        </div>
    );
}