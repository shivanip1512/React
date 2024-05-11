const heading = React.createElement(
    'h1',
    { id: "heading", xyz: "abc" },
    "Hello World from React!"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// render heading object to 
root.render(heading); 