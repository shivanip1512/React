import { useSelector } from "react-redux";
import { Item } from "./Item";

export const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    return(
        <div>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 ">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Checkout</h2>
                    <div className="m-5">
                        {  
                        cartItems.map(item => <Item data={item} showAdd={false} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}