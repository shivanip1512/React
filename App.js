import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => render => HTMLElement
const heading = React.createElement("h1", { id: "heading" }, "Ni hao 🥋🏆")

// create react element using jsx
// JSX transpilation = JSX-> Parcel -> BABEL
// JSX => Babeltranspiled => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 id="heading" className="head">
        {heading}
        Ni hao using JSX Element🥋🏆
    </h1>
);

// React Component
/**
 * 2 types - 
 * - Class based Components (old)
 * - Functional Components (new)
 * */

// React Functional Component
const HeadingComponent1 = function() {
    return <h1>Ni Hao from Functional Component1 🥋🏆</h1>
};
    
const HeadingComponent2 = () => <h1>Ni Hao from Functional Component2 🥋🏆</h1>;

const jsxVar = (
    <div id="jsxElem">
    <h1>Ni Hao from JSX Elem 🥋🏆</h1>
        <HeadingComponent2 />
    </div>
);

 // Component Composition
const HeadingComponent3 = () => (
    <div id="container">
        { [jsxHeading, 1000, jsxVar ]}
        <HeadingComponent1 />
        <h1>Ni Hao from Functional Component3 🥋🏆</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent3 />);