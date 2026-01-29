import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h2>Title Component</h2>;
};

const paragraph = <p>This is a paragraph</p>;

const HeadingComponent = () => (
  <div>
    <h1>Heading Component</h1>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    {paragraph}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
