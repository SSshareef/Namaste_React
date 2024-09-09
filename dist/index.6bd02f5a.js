/**
 *
 * ReactElement(Object) => HTML (browser understands)
 * but when it is rendering into the dom it converts itself into the HTML
 * 
 * <div>
 * * <div>
 *        <h1>i am </h1>
 *    </div>
 * * <div>
 *        <h1>i am </h1>
 *    </div>
 * </div>
 */ // nested element
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am h1 tag of first child")));
// basic understanding
// const heading = React.createElement("h1", {}, "hello world from react");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
