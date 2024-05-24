import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Food Delivery App Components
 * 
 * Header 
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - Card Container
 *  - Restaurant container
 *  - Restaurant cards
 *      - Image
 *      - Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address, Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={require('./logo.jpg')} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0f"}}>
            <img className="res-logo" src="https://rp-media.faasos.io/catalog/images/DYEAUFMBCZ2R.jpeg"></img>
            <h3>Behrouz Biryani</h3>
            <h4>Biryani, North Indian</h4>
            <h4>4.5 stars</h4>
            <h4>45 mins</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);