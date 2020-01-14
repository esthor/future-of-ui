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

var textSize = "30";

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

var reason = ( require('../assets/reason.png'));

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
                      children: "So, how were we writing and structuring non-trivial web apps in the 2000s?"
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
                      children: "HOW SHOULD A WEB APP CODE BE STRUCTURED?"
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "100",
                            textColor: textColor,
                            fit: false,
                            children: "MVC"
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: "MVC became popular in the 90s and in the 2000s became default way to architect web apps"
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
                      children: "Node & npm"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Node & npm and CommonJS modules really changed the way we develop code. Run JS on the server, run it in the client. Look for a library on npm, `npm install` nd now you're cooking with gas. The 2010s was like an explosive rebirth of JS."
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
                      children: "CoffeeScript & Language Extension"
                    }), React.createElement(Spectacle.Notes, {
                      children: "CoffeeScript brought us a lot of language features that the community was tired of waiting around for. Many of CoffeeScript's features are in the language now"
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
                      children: "FAXJS"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Anyone ever heard of this? I want to take a look at this. Look at the example MainComponet and PersonDisplayer functions. Look at projectManager/createFaxProjectHere.js. Looks familiar? This is Jordan Walke's React prototype. He would go on to build the framework and release it in 2013."
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
                      children: "REACT"
                    }), React.createElement(Spectacle.Notes, {
                      children: "React was hugely influential. Declarative UI, Virtual DOM, Unidirectional Data Flow. Reduce side effects. Make it easy and fun to write UI again."
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
                      children: "FLUX (& REDUX)"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Flux & Redux. One way data flow, through a dispatcher, create a new store, all through an uninterruptable function call. Reduce side effects."
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
                      children: "CROSS PLATFORM JS"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "JS EVERYWHERE"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Electron, React Native (Jordan Walke again)"
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
                      children: "BUNDLERS (WEBPACK, ET AL)"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "Why?"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Bundlers (webpack). Why do we need them? CommonJS+Node....but now we have ESM support...will webpack be dead soon?"
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
                      children: "Babel"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "Why?"
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
                      children: "ESLINT & PRETTIER"
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "Why?"
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
                      children: "Typed JavaScript"
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
                      children: "(Late 2010s EDITION)"
                    }), React.createElement(Spectacle.Notes, {
                      children: "React or another composable JS framework. Maybe if you're embracing trends, you are using a type system on top of JavaScript,like TypeScript or Flow."
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
                      children: "What does the future look like?"
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
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
                      children: "React...again."
                    }), React.createElement(Spectacle.Notes, {
                      children: "React pushed us towards functional, declarative UIs, with immutability baked in to the patterns and best practices. But not everyone embraced React's functional patterns and you could still write mutations."
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
                      children: "🎣"
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "100",
                            textColor: textColor,
                            fit: false,
                            children: "Hooks"
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: "Why? Why functional components? Why now stateful functional components? Why change the API so much? Performance? No. UX. Namely: Dev UX. How easy is this code to understand, maintain, and extend? How easy is it to Reason about?"
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
                      children: "How easy is my code to Reason about?"
                    }), React.createElement(Spectacle.Notes, {
                      children: "I will argue that this is the most important part of coding UI. We're not trying to beat a compiler. Or the plethora of abstraction layers before it is finally run in a form that a machine can understand. We are writing code for humans."
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
                      children: "What should a future framework look like?"
                    }), React.createElement(Spectacle.Notes, {
                      children: "So, we are at the present in my talk. We have some pretty awesome tools in our stack. Where do we go from here? What should a framework or language or set of tool in the future look like?"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "It should be:"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Type safe."
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Fast. Like, really, really fast."
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Less possible bugs."
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Easy to read and write."
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "our intellectual powers are rather geared to master static relations and that our powers to visualize processes evolving in time are relatively poorly developed. For that reason we should do (as wise programmers aware of our limitations) our utmost best to shorten the conceptual gap between the static program and the dynamic process, to make the correspondence between the program (spread out in text space) and the process (spread out in time) as trivial as possible. - Dijkstra"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "A step further..."
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Less tooling & tooling boilerplate"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Immutable"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Pure"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Declarative. Fully embrace functional"
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "We're making a wishlist, right? So we can take it a step further. Less tooling = I want to focus on writing my UI, not configuring my setup."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "Get crazy with it:"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Type safe? How about 100% type safety and soundness coverage?!"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "ES2020? How about ES2030?!"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Run Anywhere. Super Fast and Natively!"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Write the React way."
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!"
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
                      children: "THE FUTURE IS NOW."
                    }), React.createElement(Spectacle.Appear, {
                      children: React.createElement(Spectacle.Text, {
                            textSize: "100",
                            textColor: textColor,
                            fit: false,
                            children: "AND IT'S IN PROD..."
                          })
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
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
                      children: "...AND USED BY HUNDREDS OF MILLIONS OF USERS"
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Image, {
                      width: "100vw",
                      src: reason
                    }), React.createElement(Spectacle.Notes, {
                      children: "It's called ReasonML."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "What is Reason?"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "NOT Machine Learning"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Made by Jordan Walke (who?)"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Syntax over OCaml for easy onboarding JS/React devs"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Used at FB."
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "Why use Reason?"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "\"Picked up where React left off\""
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Pure, Immutable, Functional by default"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "\"ES2030 now.\" Advanced language features."
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Run natively, tiny & fast af"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "JS Everywhere! ...is broken"
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "How Reason Works"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "The AST"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Everything's a module*"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Interop/FFI"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "\"React pricinples brought to the language level\""
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!"
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "Reason Ecosystem"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "ReasonML"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Target web? => BuckleScript"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Want to write React? => ReasonReact"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Want to write ReactNative? => ReasonReactNative"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Want to run Jest-like tests? => Rely"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "Use a better Electron? => ReveryUI"
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Let's learn more about these with some demos."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
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
                  source: "    let age = 25;",
                  margin: "auto",
                  overflow: "overflow",
                  textSize: 30
                }), React.createElement(Spectacle.CodePane, {
                  lang: "reason",
                  source: "    let age = 25;\n    Js.log(\"My age is \" + age); /* Nope */",
                  margin: "auto",
                  overflow: "overflow",
                  textSize: 30
                }), React.createElement(Spectacle.CodePane, {
                  lang: "reason",
                  source: "    let age = 25;\n    Js.log(\"My age is \" + age); /* Nope */\n    Js.log2(\"My age is \", age); /* \"My age is \" 25 */",
                  margin: "auto",
                  overflow: "overflow",
                  textSize: 30
                }), React.createElement(Spectacle.CodePane, {
                  lang: "reason",
                  source: "    let age = 25;\n    Js.log(\"My age is \" + age); /* Nope */\n    Js.log2(\"My age is \", age); /* \"My age is \" 25 */\n    Js.log(\"My age is \" ++ string_of_int(age)); /* \"My age is 25\" */",
                  margin: "auto",
                  overflow: "overflow",
                  textSize: 30
                }), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "Shut up."
                    }), React.createElement(Spectacle.Text, {
                      textSize: "100",
                      textColor: textColor,
                      fit: false,
                      children: "Show me something cool."
                    }), React.createElement(Spectacle.Notes, {
                      children: ""
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
                      children: "Meta Demo"
                    }), React.createElement(Spectacle.Notes, {
                      children: "This presentation was written in ReasonReact + custom bindings for Spectacle. Checkout out how fast bucklescript works."
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
                      children: "Revery Demo"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Ken Wheeler is a beast. He also love beats. He modeled a real life beat making hardware into a reason app, using revery. And the archive is 2mbs. And check out how fast it loads. Bye bye, electron."
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
                      children: "Reason React Native"
                    }), React.createElement(Spectacle.Notes, {
                      children: "Init a new project. Watch bsb go!"
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
                      children: "Reason React Native"
                    }), React.createElement(Spectacle.Notes, {
                      children: "React Navigation bindings. I'm writing a production app in Reason React Native, and my biggest fear was being limited in what libs I could use. Something about 'use any packages from the js world' somehow didn't click right away. Now, I spend almost no time wrapping a library (if there are reason bindings) and spend way more time choosing libs and writing ui."
                    })), React.createElement(Spectacle.Slide, {
                  transition: /* :: */[
                    "slide",
                    /* [] */0
                  ],
                  children: null
                }, React.createElement(Spectacle.Heading, {
                      size: 4,
                      textColor: textColor,
                      lineHeight: "1",
                      children: "Why & Why Not Reason"
                    }), React.createElement(Spectacle.List, {
                      children: null
                    }, React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "ReasonML"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(+) type inference for free"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(+) easier to reason about"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(+) less bugs"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(+) easy to pickup for JS/React devs"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(+) fast, native, cross-platform"
                              })
                        }), React.createElement(Spectacle.Appear, {
                          children: React.createElement(Spectacle.ListItem, {
                                textSize: textSize,
                                children: "(-) new sytnax to learn"
                              })
                        })), React.createElement(Spectacle.Notes, {
                      children: "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!"
                    })));
}

var listItemTextSize = "20";

var size = 3;

var fit = true;

var make = Presentation;

exports.rs = rs;
exports.colorConfig = colorConfig;
exports.fontConfig = fontConfig;
exports.theme = theme;
exports.textSize = textSize;
exports.listItemTextSize = listItemTextSize;
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
exports.reason = reason;
exports.IntroNotes = IntroNotes;
exports.SimpleSlide = SimpleSlide;
exports.Code = Code;
exports.make = make;
/* theme Not a pure module */
