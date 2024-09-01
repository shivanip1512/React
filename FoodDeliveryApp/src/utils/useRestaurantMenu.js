import { lazy, useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import mockData from '../../__mocks__/RestaurantMenuMocks/485330.json';


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
            fetchData();
    }, []);
    
    const fetchData = async () => {
        if (process.env.NODE_ENV === 'production') {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setResInfo(json.data);
        }
        else {
            try {
                // const path = `../../__mocks__/RestaurantMenuMocks/${resId}.json`;
                // console.log(`Attempting to import from path: ${path}`);
                // const dataModule = await import(`${path}`);
                setResInfo(mockData);
             } catch (err) {
                console.error('Detailed import error:', err);
             }
        }
    }

    return resInfo;
}


export default useRestaurantMenu;