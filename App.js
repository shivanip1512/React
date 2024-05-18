import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => render => HTMLElement
const heading = React.createElement("h1", { id: "heading" }, "Ni hao 🥋🏆")

// create react element using jsx
// JSX transpilation = JSX-> Parcel -> BABEL
// JSX => Babeltranspiled => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 id="heading" className="head">
        Ni hao using JSX 🥋🏆
    </h1>
);

// React Component
/**
 * 2 types - 
 * - Class based Components (old)
 * - Functional Components (new)
 * */

// React Functional Component
const HeadingComponent1 = () => {
    return <h1>Ni Hao from Functional Component1 🥋🏆</h1>
};
    
const HeadingComponent2 = () => <h1>Ni Hao from Functional Component2 🥋🏆</h1>;

 // Component Composition
const HeadingComponent3 = () => (
    <div id="container">
        <HeadingComponent1 />
        <h1>Ni Hao from Functional Component3 🥋🏆</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent3 />);