/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 Tag</h1>
 *          <h2>I'm h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 Tag</h1>
 *          <h2>I'm h2 Tag</h2>
 *      </div>
 * </div>
 */
const arrOfheadingTags = [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag")
];
        
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
        "div", { id: "child" }, arrOfheadingTags
        ),
        React.createElement(
        "div", { id: "child2" }, arrOfheadingTags
        )
    ]
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

// render parent object to 
root.render(parent);