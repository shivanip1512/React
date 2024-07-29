import { PROMISE_ROHEE } from "../../utils/constants";

export const EmptyCart = () => {
    return (
        <div className="flex justify-center">
            <img className="w-[25%] rounded-full pt-14" src={PROMISE_ROHEE} />
            <div className="flex flex-col self-center text-lg">
                <div className="font-semibold">You can't place an order with an empty cart !!!</div>
                <div className="italic">Please add items to the cart.</div>
            </div>
        </div>
    );
}