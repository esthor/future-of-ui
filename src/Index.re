// Entry point

[@bs.val] external document: Js.t({..}) = "document";

// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.
let style = document##createElement("style");
document##head##appendChild(style);
style##innerHTML #= ExampleStyles.style;

let makeContainer = () => {
  let container = document##createElement("div");
  container##className #= "container";

  let content = document##createElement("div");
  content##className #= "containerContent";

  let () = container##appendChild(content);
  let () = document##body##appendChild(container);

  content;
};

ReactDOMRe.render(<Presentation />, makeContainer());