'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Presentation$FutureOfReactAndUiPresentation = require("./Presentation/Presentation.bs.js");
var ExampleStyles$FutureOfReactAndUiPresentation = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$FutureOfReactAndUiPresentation.style;

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "container";
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(Presentation$FutureOfReactAndUiPresentation.make, { }), makeContainer(/* () */0));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
