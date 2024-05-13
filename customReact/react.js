function customRender(reactElement, container) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  //   element.setAttribute("href", reactElement.props.href);
  //   element.setAttribute("target", reactElement.props.target);

  for (prop in reactElement.props) {
    if (prop === "children") continue;
    element.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const reactElement1 = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google"
);

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);

//ReactDOM.createRoot(document.getElementById("#root")).render(reactElement1);
