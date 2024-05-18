import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => render => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Ni hao 🥋🏆")
console.log(heading);

// create react element using jsx
// JSX transpilation = JSX-> Parcel -> BABEL
// JSX => Babel transpiled => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 id="heading" className="head">
        Ni hao using JSX 🥋🏆
    </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);