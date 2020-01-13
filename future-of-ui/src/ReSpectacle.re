// TODO: type out the base TypeFace Props from spectacle that can be put on any element: https://github.com/FormidableLabs/spectacle/blob/master/docs/tag-api.md#typeface
// type textColor = option(string);
// type typeface = {textColor: option(string)};

// TODO: type out these transitions to actually work well in the Slide module
type transitionString =
  | None
  | Slide
  | Zoom
  | Fade
  | Spin;
let transitions = (s: transitionString) =>
  switch (s) {
  | None => "none"
  | Slide => "slide"
  | Zoom => "zoom"
  | Fade => "fade"
  | Spin => "spin"
  };
type polymorphicTransitions = [ | `zoom | `slide | `fade | `spin | `none];

module Deck = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~theme: Js.t('a), ~children: React.element) => React.element =
    "Deck";
};

module Slide = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~transition: list(string), ~children: React.element) => React.element =
    "Slide";
};

module CodePane = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (
      ~lang: string,
      ~source: string,
      ~margin: string,
      ~overflow: string,
      ~textSize: int
    ) =>
    React.element =
    "CodePane";
};

module Appear = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "Appear";
};

module Notes = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "Notes";
};

module Quote = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~textColor: string, ~children: React.element) => React.element =
    "Quote";
};

module Cite = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "Cite";
};

module BlockQuote = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "BlockQuote";
};

module Text = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (
      ~textSize: string,
      ~textColor: string,
      ~fit: bool,
      ~children: React.element
    ) =>
    React.element =
    "Text";
};

module Theme = {
  [@bs.deriving abstract]
  type colors = {
    [@bs.optional]
    primary: string,
    [@bs.optional]
    secondary: string,
    [@bs.optional]
    tertiary: string,
    [@bs.optional]
    quaternary: string,
  };

  [@bs.deriving abstract]
  type fonts = {
    [@bs.optional]
    primary: string,
    [@bs.optional]
    secondary: string,
    [@bs.optional]
    tertiary: string,
  };
  [@bs.module "spectacle"] [@bs.scope "themes"] [@bs.val]
  external create: (colors, fonts) => Js.t('a) = "defaultTheme";
};

module Heading = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (
      ~size: int,
      ~textColor: string,
      ~lineHeight: string,
      ~children: React.element
    ) =>
    React.element =
    "Heading";
};

module List = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "List";
};

module ListItem = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~textSize: string, ~children: React.element) => React.element =
    "ListItem";
};

[@bs.deriving abstract]
type tableStyle = {
  [@bs.optional]
  border: string,
};

module Table = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~style: tableStyle, ~children: React.element) => React.element =
    "Table";
};

module Tr = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~style: tableStyle, ~children: React.element) => React.element =
    "TableRow";
};

module Td = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~style: tableStyle, ~children: React.element) => React.element =
    "TableItem";
};

module Thead = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~style: tableStyle, ~children: React.element) => React.element =
    "TableHeader";
};

module Th = {
  [@bs.module "spectacle"] [@react.component]
  external make:
    (~style: tableStyle, ~children: React.element) => React.element =
    "TableHeaderItem";
};

module TableBody = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~children: React.element) => React.element = "TableBody";
};

module Image = {
  [@bs.module "spectacle"] [@react.component]
  external make: (~width: string, ~src: string) => React.element = "Image";
};