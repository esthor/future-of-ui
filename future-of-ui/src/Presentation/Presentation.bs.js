'use strict';

var React = require("react");
var Spectacle = require("spectacle");

function rs(prim) {
  return prim;
}

var colorConfig = {
  primary: "#48a9dc",
  secondary: "rgb(224, 226, 229)",
  tertiary: "rgb(224, 226, 229)",
  quaternary: "rgb(224, 226, 229)"
};

var fontConfig = { };

var theme = Spectacle.themes.defaultTheme(colorConfig, fontConfig);

var textColor = "rgb(224, 226, 229)";

var lineHeight = "2";

var style = {
  border: "0px solid black"
};

var aol = ( require('../assets/aol.jpg'));

var etn = ( require('../assets/et-networks1.png'));

var etngif = ( require('../assets/etnetworks.gif'));

var palm = ( require('../assets/palm.gif'));

var timeline = ( require('../assets/timeline.png'));

var timeline2 = ( require('../assets/timeline2.png'));

var stacksplit1 = ( require('../assets/stacksplit1.png'));

var stacksplit2 = ( require('../assets/stacksplit2.png'));

function Presentation$IntroNotes(Props) {
  return React.createElement("div", undefined, React.createElement("p", undefined, "So, this is a fairly broad scope for a talk."), React.createElement("p", undefined, "'UI Programming' is a giant topic.~\n\n          So, what I'm going to attempt to do here is talk about what I think are relevant parts to this topic specifically for React devs and people working on modern apps written in JavaScript."));
}

var IntroNotes = {
  make: Presentation$IntroNotes
};

function Presentation$SimpleSlide(Props) {
  var text1 = Props.text1;
  return React.createElement(Spectacle.Slide, {
              transition: /* :: */[
                "slide",
                /* [] */0
              ],
              children: null
            }, React.createElement(Spectacle.Text, {
                  textSize: "100",
                  textColor: textColor,
                  fit: false,
                  children: text1
                }), React.createElement(Spectacle.Notes, {
                  children: text1
                }));
}

var SimpleSlide = {
  make: Presentation$SimpleSlide
};

var Code = {
  age: 23
};

function Presentation(Props) {
  return React.createElement(Spectacle.Deck, {
              theme: theme,
              children: null
            }, React.createElement(Spectacle.Slide, {
                  transition: /* [] */0,
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 3,
                      textColor: textColor,
                      lineHeight: lineHeight,
                      children: "THE FUTURE OF REACT"
                    }), React.createElement(Spectacle.Heading, {
                      size: 3,
                      textColor: textColor,
                      lineHeight: lineHeight,
                      children: "&"
                    }), React.createElement(Spectacle.Heading, {
                      size: 3,
                      textColor: textColor,
                      lineHeight: lineHeight,
                      children: "UI PROGRAMMING"
                    }), React.createElement(Spectacle.Notes, {
                      children: React.createElement(Presentation$IntroNotes, { })
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: lineHeight,
                      children: "UI PROGRAMMING TIMELINE"
                    }), React.createElement(Spectacle.Image, {
                      width: "100vw",
                      src: timeline
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: React.createElement(Spectacle.Heading, {
                        size: 3,
                        textColor: textColor,
                        lineHeight: lineHeight,
                        children: "WHERE DID WE COME FROM?"
                      })
                }), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: React.createElement(Spectacle.BlockQuote, {
                        children: null
                      }, React.createElement(Spectacle.Quote, {
                            textColor: textColor,
                            children: "\"He who does not forget the past is master of the present\"'"
                          }), React.createElement(Spectacle.Cite, {
                            children: "Sima Qian, Shiji"
                          }))
                }), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "100vw",
                      src: timeline2
                    }), React.createElement(Spectacle.Notes, {
                      children: "The web needed a language to provide action, so pages could come alive and simple things could happen on them. Thus LiveScript was made, in 10 days. but to remind people of the super hot language of the day and confuse people forever since, it was branded 'JavaScript' "
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 1,
                      textColor: textColor,
                      lineHeight: lineHeight,
                      children: "THE 90s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "The 90s were also the period where the masses entered a hysteria about dot .coms while the internet went mainstream and using personal computers became more personal. Chat rooms, online shopping, magazines, AIM..."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "80vw",
                      src: aol
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Heading, {
                            size: 3,
                            textColor: textColor,
                            lineHeight: lineHeight,
                            children: "AMERICA ONLINE!"
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: "Does anyone remember this UI?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "40vh",
                      src: palm
                    }), React.createElement(Spectacle.Notes, {
                      children: "I really want to emphasize that a lot of technology started off small or not mainstream, like email or chats, but in the following decades would become the future. A great example is handheld computers, like the Palm Pilot. Obviously, no one is using these today, but the next decade would see the birth of smart phones. If you want to see the future, look to the past to figure out where we might be going. This will be a recurring theme in my talk."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "JS -> ECMA"
                    }), React.createElement(Spectacle.Notes, {
                      children: "JavaScript appeared in the middle of the 90s, and was a language for designers. But by the end of the decade, JavaScript was being standardized across tech through committee, and its future looked bright."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Table, {
                      style: style,
                      children: React.createElement(Spectacle.TableRow, {
                            style: style,
                            children: null
                          }, React.createElement(Spectacle.TableItem, {
                                style: style,
                                children: React.createElement(Spectacle.Image, {
                                      width: "30vw",
                                      src: etn
                                    })
                              }), React.createElement(Spectacle.TableItem, {
                                style: style,
                                children: React.createElement(Spectacle.Image, {
                                      width: "30vw",
                                      src: etngif
                                    })
                              }))
                    }), React.createElement(Spectacle.Text, {
                      textSize: "40",
                      textColor: textColor,
                      fit: false,
                      children: "DHTML!"
                    }), React.createElement(Spectacle.Notes, {
                      children: "...And some kid made some crappy websites with lots of cash-for-clicks links. I brought this up, not to show my horrible pre-teen design sense, but to point out a scary trend. I wrote this in Frontpage. That was a Microsoft product. Microsoft wanted you to write pages in DHTML. Yeah, WTF is that? It was Microsoft's proprietary branding of HTML, CSS and JS working together. They called it Dynamic HTML. And it's this kind of splintering that can plague a platform and would become a huge problem in the following decade."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "HOW SHOULD A WEB APP WORK?"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "(90s EDITION)"
                    }), React.createElement(Spectacle.Notes, {
                      children: "So, how were we writing and structuring non-trivial web apps in the 1990s?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "SERVER RENDERING"
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "50",
                            textColor: textColor,
                            fit: false,
                            children: "HOW TO DEAL WITH DATA CHANGE?"
                          })
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "50",
                            textColor: textColor,
                            fit: false,
                            children: "SEND NEW PAGE, STUPID"
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: "Render the markup on the server, send it over the wire to the user. Of course, if data changed, you would need to update the View. How would you do this? Obviously the server would just render a new document and send the new markup. Simple. What was the UX? Well, a user would interact with something, an underlying web form element would handle the input, if it was a big change, it would need to send it to the server, the server would send a whole new markup. The whole page would refresh. But who cared? No one. This was a new platform, the wild west. Have you seen Geocities?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE FUTURE LOOKED BRIGHT"
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.BlockQuote, {
                      children: null
                    }, React.createElement(Spectacle.Quote, {
                          textColor: textColor,
                          children: "\"...reliably compose JavaScript programs out of components and libraries and to write object-oriented programs.\""
                        }), React.createElement(Spectacle.Cite, {
                          children: "Waldemar Horwat at Netscape"
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.Cite, {
                                children: "(1999)"
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "JavaScript appeared in the middle of the 90s, and was a language for designers. But by the end of the decade, JavaScript was being standardized across tech through official international committee, and its future looked bright. It looked like it was on the cusp of becoming a full language."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2000s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "The 2000s"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "ES4"
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.BlockQuote, {
                      children: null
                    }, React.createElement(Spectacle.Quote, {
                          textColor: textColor,
                          children: "Composable, modular programming-in-the-large language, static typing, generators & iterators, destructuring, algebraic data types for functional programming..."
                        }), React.createElement(Spectacle.Cite, {
                          children: "ES4?"
                        })), React.createElement(Spectacle.Notes, {
                      children: "Who here has used ES4? The promise of ES4 was a lot of what we heard as the promise of the language at the end of the 90s. "
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: ";-("
                    }), React.createElement(Spectacle.Notes, {
                      children: "ES4, after infighting, industry splintering, was abandoned. A few small things were added to the language, from ES3->ES5, and we lost almost an entire decade of language development. Some of the ambitious stuff was moved to ES6 HARMONY."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "HOW SHOULD A WEB APP WORK?"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "(2000s EDITION)"
                    }), React.createElement(Spectacle.Notes, {
                      children: "So, how were we writing and structuring non-trivial web apps in the 1990s?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "SERVER RENDERING"
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "100",
                            textColor: textColor,
                            fit: false,
                            children: "AJAX + DOM NODE MANIPULATION"
                          })
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "50",
                            textColor: textColor,
                            fit: false,
                            children: "HOW TO DEAL WITH DATA CHANGE?"
                          })
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "50",
                            textColor: textColor,
                            fit: false,
                            children: "CHANGE THE DOM NODE, STUPID"
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: "Render the markup on the server, send it over the wire to the user. But you might include some more JavaScript, maybe you're using jQuery, on the frontend to handle dynamic updates based on user interactions. They clicked added a comment? Maybe it's simple enough that you can handle that UI state update on the frontend, maybe you send the event to the server, process, and send back updates, then use direct DOM manipulation. So, you traverse the entire DOM tree, find the node or nodes you want to change, and then you just change them. What a wonderful world. What could go wrong?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "ES5"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "+ Node Arrives"
                    }), React.createElement(Spectacle.Notes, {
                      children: "The decade was frought with splintering, but development of more specific async page updates, and the decade closed out with a bang. ES5 and Node.JS dropped in 2009, which would pave the way for the rapid advancement of the 2010s."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Node & npm"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "CoffeeScript"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "FaxJS"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "React"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Flux & Redux"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "React pushed us towards funcational, declarative UIs, with immutability baked in to the patterns and best practices. But not everyone embraced React's functional patterns and you could still write mutations."
                    }), React.createElement(Spectacle.Notes, {
                      children: "ImmerJS"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Bundlers (webpack)"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Babel"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "ESLint & Prettier"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "THE 2010s"
                    }), React.createElement(Spectacle.Notes, {
                      children: "TypeScript, Flow"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "100vw",
                      src: stacksplit1
                    }), React.createElement(Spectacle.Notes, {
                      children: "I would argue that in the previous decades' paradigms, our efforts in building web apps might be split somewhat like this. Heavier on the DB and the Backend, especially in server rendered templated apps, and what the 2010s especially brought to us was power back to the Javascript and the frontend."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "100vw",
                      src: stacksplit2
                    }), React.createElement(Spectacle.Notes, {
                      children: "By the end of the decade, we were controlling so much more from our frontend code. Anybody build a simple fullstack app recently? Where was the most work done? You rendering business logic? Your state updates? \"Middleware\"? DB queries? Especially with tools like React and GraphQL, Redux, etc. Our frontend techonolgies smarter, and doing more lifting, so it's even more important to choose the right one. The one that will be easiest to write, maintain, and extend. "
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "zoom",
                    /* [] */0
                  ],
                  children: React.createElement(Spectacle.Heading, {
                        size: 3,
                        textColor: textColor,
                        lineHeight: lineHeight,
                        children: "Some Code"
                      })
                }), React.createElement(Spectacle.CodePane, {
                  lang: "reason",
                  source: "    let age = 25;\n    Js.log(\"My age is \" + age); /* Nope */\n    Js.log(\"My age is \", age); /* My age is 25 */",
                  margin: "auto",
                  overflow: "overflow",
                  textSize: 30
                }));
}

var textSize = "30";

var size = 3;

var fit = true;

var make = Presentation;

exports.rs = rs;
exports.colorConfig = colorConfig;
exports.fontConfig = fontConfig;
exports.theme = theme;
exports.textSize = textSize;
exports.size = size;
exports.textColor = textColor;
exports.fit = fit;
exports.lineHeight = lineHeight;
exports.style = style;
exports.aol = aol;
exports.etn = etn;
exports.etngif = etngif;
exports.palm = palm;
exports.timeline = timeline;
exports.timeline2 = timeline2;
exports.stacksplit1 = stacksplit1;
exports.stacksplit2 = stacksplit2;
exports.IntroNotes = IntroNotes;
exports.SimpleSlide = SimpleSlide;
exports.Code = Code;
exports.make = make;
/* theme Not a pure module */
