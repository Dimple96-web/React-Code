import React from "react";
import ReactDOM from "react-dom/client";
/* <div id="parent">
  <div id="child">
    <h1 id="heading">Im a h1 tag</h1>
    <h2>Im a h2 tag</h2>
  </div>
  <div id="child2">
    <h1 id="heading">Im a h1 tag</h1>
    <h2>Im a h2 tag</h2>
  </div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Im a h1 tag"),
    React.createElement("h1", {}, "Im a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Im a h1 tag"),
    React.createElement("h1", {}, "Im a h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// JSX Code
const jsxHeading = <h1 id="heading">Hello World from JSX</h1>;

//Passing props to the component
{
  /* <ResturantCard
          name="Pizza Hut"
          cuisine="Pizza"
          rating="4.2"
          time="25 min"
        />
        <ResturantCard
          name="KFC"
          cuisine="Chicken"
          rating="4.0"
          time="35 min"
        />
        <ResturantCard
          name="Domino's Pizza"
          cuisine="Pizza"
          rating="4.7"
          time="20 min"
        /> */
}
