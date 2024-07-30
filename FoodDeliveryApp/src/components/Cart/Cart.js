import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/redux/cartSlice";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (cartItems.length === 0)
    return <EmptyCart/>

    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Checkout Cart</h2>
                <button type="submit" className="flex w-2/12 items-center justify-center rounded-lg bg-gray-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div>
                {
                  cartItems.map((item) => <CartItem key={item.id} data={item} />)
                }
              </div>
              <OrderSummary data={cartItems} />
            </div>
          </div>
        </section>
    );
};