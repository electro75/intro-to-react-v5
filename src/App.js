const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, { name: "Theo", animal: "Dog", breed: "Pug" }),
    React.createElement(Pet, { name: "Pepper", animal: "Dog", breed: "Corgi" }),
    React.createElement(Pet, { name: "Felix", animal: "Tortoise", breed: "??" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
