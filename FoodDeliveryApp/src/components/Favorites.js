import { useSelector } from "react-redux";
import { Item } from "./Item";
import { LISTEN_ROHEE } from "../utils/constants";

const Favorites = () => {
    const favItems = useSelector((store) => store.favourites.items);

    if (favItems.length === 0) {
        return <EmptyFav/>
    }

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl pb-10">Favourites</h2>
        <div className="w-9/12 flex flex-col m-auto p-4 shadow-xl rounded-2xl border border-gray-100">
            {
                favItems.map((item)=><Item key={item.id} data={item} resMenu={false}/>)
            }
        </div>
            </div>
            </section>
    );
}

const EmptyFav = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col self-center text-lg -mt-9">
                <div className="font-semibold">You don't have any items in wishlist !!!</div>
                <div className="italic">Please add items to the Favourites.</div>
            </div>
            <img className="w-[25%] pt-20 rounded-b-full" src={LISTEN_ROHEE} />
        </div>
    );
}

export default Favorites;