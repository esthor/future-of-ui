# Future of ~~React~~ UI Programming: What will define this new decade

## Summary

Title: Future of React & UI Programming

Description: At the start of the new decade, let's take a look back at how we got here and take a peek at what's to come for how we build UIs in the next 10 years.

This presentation will be broken up into 3 parts:

1. History of how we got to the current status quo. Any why React?
2. What possible futures can we already start to see & what does UI programming in the future look and feel like?
3. Live Demo & Walkthrough of programming beyond today's React and JavaScript

We're gonna try to steer clear of visions of future interactions and interfaces (sorry HoloLens!), and focus on actual futures that are already here. Yeah, I know that last bit doesn't make sense...how can you have a future already now? Hopefully it will make sense by the end of the presentation. If not, you can ask for a full refund.

Presentation by Erik Thorelli

## Intro

quote from China book about knowing the past to be master of the present and future **TODO**

Where did we come from?
Show mini timleine of us, 2020, with React and others
Zoom out to show past, back to the 90s
Zoom out to show future

- History of JS, and the 90s web

## Look back at History

**Look to the past to understand the present and future.**

"quote from Code book about tech being simpler and easier to grok"**TODO**

**Beginnings of big trends start years and years before hitting the big time...what's going on now in the small rooms and universities?**

## 90s

Get America Online! Mass marketing of web (but also exploration of portable communication & computer devices, like Palm Pilot)
Basics of markup...and oh yeah, we need something dynamic, to bring pages alive... _LiveScript_
JS -> ECMA
ECMAScript 3 in 1999
A language for designers.
DHTML
The future: "...reliably compose JavaScript programs out of components and libraries and to write object-oriented programs." - Waldemar Horwat at Netscape

But there would be hurdles and an explosion of other tools, mostly proprietary or cartel-ish

## 2000s

JavaScript becomes a composable, modular programming-in-the-large language, with optional static typing, generators & iterators, destructuring, and algebraic data types for functional programming for real, full application development...anyone ever use ES4?

ES4 Debacle (3.1 -> 5, lots of 4 -> ES6 Harmony, new gradual rollout standardization process annually)
End with launch of ES5 & Node

## 2010s

Fax.JS - Who's heard of it

What did they last decade bring to us?

- Reactive & Declarative UI
- Composition
- JSX and virtual DOM diffing
- Unidirectional of data flow
- Taste of Immutability
- Write Once, run your JS anywhere (react native, electron, etc.) - multiplatform
- NodeJS - not UI, but still YUGE
- UI language starts to not just be UI, but everywhere
- Amazing Tools (Babel, Webpack, ES/TSLint, etc.) - but also tool bloat and costly setup time

## 2020s

What does the next decade have in store for us? / What do we wish for?

- Typed Web & other "real" programming language features for JS, like private methods, etc. - ECMA train will keep chugging along
- More semantic web, escape from `<div>` soup
- Next generation of "write once run everywhere"...this time, truly native
- Responsively scalable by default
- faster buildz plz
- Pure Functional Programming - Immutability & Purity by default, just functions
- Tools built-in
- Impossible to write bugs.

What's the benefit of a sound type system?

- Kill bugs before you run the program
- Documentation of your program, made for free

### HOOKS

What?
How?
But do we ask why? -> easier to reason about
People obsess about performance. That's naive.
React Hooks vs. Classes -> ReasonReact SO MUCH WIN (see cheng lou's reasonconf talk, ~20mins in)

## Reason

Compile time
Catching missing cases in a switch
strong infering types
creating bindings (spectacle)
higher quality - less thinking required
battle-tested OCaml
bucklescript / bsb - ridiculous build times and avoid pitfalls of in-memory build systems (like tsc and many others), compile individual files, then gc, rely on spinning up individual unix processes, not js.
global module system - almost too easy
return last thing in a block

No dynamic type coercion like in JS

```javascript
const age = 23;
console.log("My age is " + age); // My age is 23
```

What happens in Javascript?

```typescript
type age = int;
const age = 23;
console.log("My age is " + age); // Whatchu got, TypeScript?
```

```reason
let age = 23;
Js.log("My age is " + age); // Nope.
Js.log2("My age is ", age); // My age is 23 // But why the `2` in `Js.log()` call? Safety first.
```

```reason
let data = [%bs.raw "require('../data.json')"]; // Use JavaScript when you need.
```

_Type System Meme_ - type-system-meme.jpg

what is a react component?
children are props?
number? int, float, etc.
string vs. char
exhaustive pattern matching

**show spectacle/reasonreact app**
**show reason-react-native app**

## Reference

Stuff to check out.

### How can you keep up with the rapid advance of ReasonML

(A bunch of React/JavaScript who are ReasonML people hiding in plain sight!)

- People to follow - Jordan Walke (@jordwalke), Jared Forsyth(@jaredforsyth), @Reasonml, Cheng Lou (@\_chenglou), Hongbo Zhang (@bobzhang1988), Cristiano Calcagno (@ccrisccris), Sketch.sh (@sketch_sh), Reason Town Podcast (@ReasonTownFM)
- Community - <https://reasonml.github.io/docs/en/community>
- Reason Discord - <https://reasonml.chat>
- ReasonConf - @ReasonConf & the videos of all the talks
- ReasonML Hub & Dr. Axel Rauschmayer - <http://reasonmlhub.com/exploring-reasonml/>
- Redex - Reason Package Index - <https://redex.github.io/>

### Books/Videos/Articles I relied on

Jordan Walke - React to the Future - <https://www.youtube.com/watch?v=5fG_lyNuEAw&t=170s>

Cheng Lou - Keynote | ReasonConf 2019 - <https://www.youtube.com/watch?v=ocBUpGC_Nbo>

Ricky Vetter - Why React is just better in Reason - <https://www.youtube.com/watch?v=i9Kr9wuz24g&t=1756s>

Trying ReasonML with React hooks for the first time (Jared Forsyth) - <https://www.youtube.com/watch?v=iGpTMjYmcf8>

Ken Wheeler - Processing Audio using DSP in Reason - <https://www.youtube.com/watch?v=fdI10qe06Is>
<https://github.com/kenwheeler/camlsynth>

The History of React.js on a Timeline - <https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/>

Reason FAQ - <https://reasonml.github.io/docs/en/faq>

ReasonML Quick Start Guide (Packt Publishing) - **amazon**

Web Development with ReasonML - Type safe, Funcation programming for Javascript Developers - **amazon**

A Short Story about React Native - <https://jobninja.com/blog/short-story-react-native>

Tom Occhino - React.js Conf 2015 Keynote - Introducing React Native - <https://www.youtube.com/watch?v=KVZ-P-ZI6W4>

Pete Hunt: React: Rethinking best practices -- JSConf EU - <https://www.youtube.com/watch?v=x7cQ3mrcKaY>

A Case against the GO TO Statement. - Edgar W.Dijkstra - <https://www.cs.utexas.edu/users/EWD/transcriptions/EWD02xx/EWD215.html>

## History

JavaScript start and 1999 quote promising future
ECMA
ES4 tragedy & Politics
Server-rendered apps -> data changed? hi server, get page, refresh to whole page. done. no problem.
Coffeescript
NodeJS, npm, and CommonJS modules
XHP - markup in your php
FaxJs - take a look
HyperScript - more Javascript->Markup aka, markup in your javascript
React -> A new way to think of writing and organizing UI code with resusable, composable components (plus JSX, Virtual-DOM), decoupling of cocerns, more cohesion...and all "just" function calls
Vue, Angular, Svelte, Derby

### Cross-platform

HTML5 mobile
Cordova/PhoneGap
Electron
React Native
React primitives, everywehere, xp, etc.
Flutter
Even Vue 3 is moving towards a more generalized API (like React always was, by decoupling React and the platform, DOM, Native, etc.)
...many other solutions
What ever happened to Native development? - oh, people still do it, because performance and app size is usually noticeably better => better UX

### Tools

npm
Webpack
Babel
ESLint + Prettier
Typescript / Flow
ImmerJS
Redux

## What is the "future"? Where can we head

Strong type system + robust generic types
Fast. Like, really fast.
Less possible bugs.
Easier to read and write.
Tools that take care of boring work, so we can focus on writing our UIs
(data) => view
Write once, run everywhere, natively.

## What are tools that can bring us there

Dart + flutter?

...
What would a full JavaScript have? We have ES2020 coming, big release, but what would ES2030 have?
What if it was flavored by React?
"our intellectual powers are rather geared to master static relations and that our powers to visualize processes evolving in time are relatively poorly developed. For that reason we should do (as wise programmers aware of our limitations) our utmost best to shorten the conceptual gap between the static program and the dynamic process, to make the correspondence between the program (spread out in text space) and the process (spread out in time) as trivial as possible." - Dijkstra
Composable and Declarative, i.e., Functional?
What if it was pure?
What if data structure were immutable by default?
Type safe?
Advanced Language features?

## What is Reason

Made by Jordan Walke (who?)
Syntax over OCaml meant for easy onboarding for JS devs (esp. react devs!)
NOT Machine Learning
NOT a new language
Used at Facebook, Bloomberg, and others. Messenger.com and Facebook.com chat is now 100% Reason, Ads Interfaces, and more FB products are converting.

## Why Reason

Robust Type system with strong inference (not writing out all your types)
    - Javascript var, let, const and type coercion vs. Reason binding and types
100% sound type safe coverage
Functional, Pure, Immutable, by default
"ES2030" NOW!
OCaml and battle-tested type system
Easy to Read
ReasonML is designed to be easy to reason about and extend
Less bugs
Really, really fast
Target native
You're already compiling-to-js...so which do you want to compile from?
You can interop with all of JS ecosystem, but also OCaml, and Reason
JS everywhere is broken. Let's be real.
~~Because it's new and shiny~~

## How Reason Works

The AST
Modules as first class citizens
Interop/FFI
Functional, Pure, Immutable Data
"React principles brought to the language level"

## The Reason Ecosystem / How you work with Reason

BuckleScript
ReasonReact
ReasonReactNative
ReasonNative - `fnm` and `Oni2`
    - Rely
esy

## What can you do with Reason

Compile for native, everywhere (Revery, Reprocessing/WebGL/OpenGL, QT, Brisk...)
Revery example (show revery site, and Ken Wheeler's camlsynth)
Reprocessing - Gravitron example

## DEMO

Let write some Reason
Syntax
Let's dive into a ReasonReact app (bsconfig.json)
Let's dive into a ReasonReactNative app
Let's look at this presentation - I wrote bindings for Spectacle, so I could write this whole thing in Reason

## Conclusion

Where we came from - simple scripting language, to writing servers and dynamic, composable functional UIs, but still A LOT left wanting for JS

### Why & Why Not Reason

(+) type inference for free
(+) easier to reason about
(+) less bugs
(-) new sytnax to learn

(js_of_ocaml been working for years)

New dev tech jealous girlfriend meme

var a = "my number";
let b = 12;
const c = 42.0;
console.log(a + b + c); // Come On. - Gob Bluth

Fast, Less Bugs, Easy to Extend
Minimize side effects, limit application state
Composable
Easier to reason about / Less cognitive load

Totally localized logic (no worrying about data mutation elsewhere)

type pattern matching (and exhaustive pattern matching by default)

make a reason react native starter repo

numbered functions
