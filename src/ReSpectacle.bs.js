'use strict';


function transitions(s) {
  switch (s) {
    case /* None */0 :
        return "none";
    case /* Slide */1 :
        return "slide";
    case /* Zoom */2 :
        return "zoom";
    case /* Fade */3 :
        return "fade";
    case /* Spin */4 :
        return "spin";
    
  }
}

var Deck = { };

var Slide = { };

var CodePane = { };

var Appear = { };

var Notes = { };

var Quote = { };

var Cite = { };

var BlockQuote = { };

var $$Text = { };

var Theme = { };

var Heading = { };

var List = { };

var ListItem = { };

var Table = { };

var Tr = { };

var Td = { };

var Thead = { };

var Th = { };

var TableBody = { };

var $$Image = { };

exports.transitions = transitions;
exports.Deck = Deck;
exports.Slide = Slide;
exports.CodePane = CodePane;
exports.Appear = Appear;
exports.Notes = Notes;
exports.Quote = Quote;
exports.Cite = Cite;
exports.BlockQuote = BlockQuote;
exports.$$Text = $$Text;
exports.Theme = Theme;
exports.Heading = Heading;
exports.List = List;
exports.ListItem = ListItem;
exports.Table = Table;
exports.Tr = Tr;
exports.Td = Td;
exports.Thead = Thead;
exports.Th = Th;
exports.TableBody = TableBody;
exports.$$Image = $$Image;
/* No side effect */
