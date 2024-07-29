import { useState } from "react";
import { useDispatch } from "react-redux";
import { CDN_RESTAURANT_URL } from "../../utils/constants";
import { removeItem, updateItem } from "../../utils/redux/cartSlice";

var totalAmount = 0;

export const CartItem = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const price = ( data.price ? data.price : data.defaultPrice) / 100;
  const itemTotalAmount = price * itemQuantity;
  totalAmount += itemTotalAmount;
    // console.log(totalAmount, itemTotalAmount)
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
    };
    
    const decrementItemQuantity = (item) => {
        const updatedData = JSON.parse(JSON.stringify(item));
        if (itemQuantity > 0) {
            updatedData.cartQuantity = itemQuantity-1;
            setItemQuantity(itemQuantity - 1);
            dispatch(updateItem(updatedData));
        }
    }

    const incrementItemQuantity = (item) => {
        const updatedData = JSON.parse(JSON.stringify(item));
        if (itemQuantity < 50) {
            updatedData.cartQuantity = itemQuantity+1;
            setItemQuantity(itemQuantity + 1);
            dispatch(updateItem(updatedData));
        }
    }

  return (
    <div className="mx-auto w-full pb-5">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <img className="object-cover w-44 h-28 rounded-lg" src={CDN_RESTAURANT_URL+data.imageId}/>

              <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100" onClick={()=>decrementItemQuantity(data)}>
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" value={itemQuantity} required readOnly/>
                  <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100" onClick={()=>incrementItemQuantity(data)}>
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900 dark:text-white">&#8377; {(price * itemQuantity).toFixed(2)}</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{data.name}</a>

                <div className="flex items-center gap-4">
                  <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500" onClick={()=>handleRemoveItem(data)}>
                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};