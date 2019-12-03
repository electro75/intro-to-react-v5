import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, { name: "Theo", animal: "Dog", breed: "Pug" }),
  //   React.createElement(Pet, { name: "Pepper", animal: "Dog", breed: "Corgi" }),
  //   React.createElement(Pet, { name: "Felix", animal: "Tortoise", breed: "??" })
  // );
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Theo" animal="Dog" breed="Pug" />
      <Pet name="Pepper" animal="Dog" breed="Corgi" />
      <Pet name="Felix" animal="Tortoise" breed="??" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
