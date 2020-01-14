open ReSpectacle;

let rs = React.string;

let colorConfig =
  Theme.colors(
    ~primary="#48a9dc",
    ~secondary="rgb(224, 226, 229)",
    ~tertiary="rgb(224, 226, 229)",
    ~quaternary="rgb(224, 226, 229)",
    (),
  );
let fontConfig = Theme.fonts();
let theme = Theme.create(colorConfig, fontConfig);
let textSize = "30";
let listItemTextSize = "20";
let size = 3;
let textColor = "rgb(224, 226, 229)";
let fit = true;
let lineHeight = "2";
let style = tableStyle(~border="0px solid black", ());

let aol: string = [%raw {| require('../assets/aol.jpg')|}];
let etn: string = [%raw {| require('../assets/et-networks1.png')|}];
let etngif: string = [%raw {| require('../assets/etnetworks.gif')|}];
let palm: string = [%raw {| require('../assets/palm.gif')|}];
let timeline: string = [%raw {| require('../assets/timeline.png')|}];
let timeline2: string = [%raw {| require('../assets/timeline2.png')|}];
let stacksplit1: string = [%raw {| require('../assets/stacksplit1.png')|}];
let stacksplit2: string = [%raw {| require('../assets/stacksplit2.png')|}];
let reason: string = [%raw {| require('../assets/reason.png')|}];

module IntroNotes = {
  [@react.component]
  let make = () => {
    <div>
      <p> {rs("So, this is a fairly broad scope for a talk.")} </p>
      <p>
        {rs(
           "'UI Programming' is a giant topic.~\n
          So, what I'm going to attempt to do here is talk about what I think are relevant parts to this topic specifically for React devs and people working on modern apps written in JavaScript.",
         )}
      </p>
    </div>;
  };
};

module SimpleSlide = {
  [@react.component]
  let make = (~text1: string) => {
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs(text1)} </Text>
      <Notes> {rs(text1)} </Notes>
    </Slide>;
  };
};

module Code = {
  let age = 23;
  // Js.log2("My age is ", age);
};

[@react.component]
let make = () => {
  <Deck theme>
    <Slide transition=[]>
      <Heading size textColor lineHeight>
        {rs("THE FUTURE OF REACT")}
      </Heading>
      <Heading size textColor lineHeight> {rs("&")} </Heading>
      <Heading size textColor lineHeight> {rs("UI PROGRAMMING")} </Heading>
      <Notes> <IntroNotes /> </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading size=4 textColor lineHeight>
        {rs("UI PROGRAMMING TIMELINE")}
      </Heading>
      <Image width="100vw" src=timeline />
    </Slide>
    <Slide transition=["slide"]>
      <Heading size textColor lineHeight>
        {rs("WHERE DID WE COME FROM?")}
      </Heading>
    </Slide>
    <Slide transition=["slide"]>
      <BlockQuote>
        <Quote textColor>
          {rs("\"He who does not forget the past is master of the present\"'")}
        </Quote>
        <Cite> {rs("Sima Qian, Shiji")} </Cite>
      </BlockQuote>
    </Slide>
    // <Heading size textColor lineHeight> {rs("The hopeful JS Future")} </Heading>
    <Slide transition=["slide"]>
      // <Heading size textColor lineHeight> {rs("BIRTH OF JS")} </Heading>

        <Image src=timeline2 width="100vw" />
        <Notes>
          {rs(
             "The web needed a language to provide action, so pages could come alive and simple things could happen on them. Thus LiveScript was made, in 10 days. but to remind people of the super hot language of the day and confuse people forever since, it was branded 'JavaScript' ",
           )}
        </Notes>
      </Slide>
    <Slide transition=["slide"]>
      <Heading size=1 textColor lineHeight> {rs("THE 90s")} </Heading>
      <Notes>
        {rs(
           "The 90s were also the period where the masses entered a hysteria about dot .coms while the internet went mainstream and using personal computers became more personal. Chat rooms, online shopping, magazines, AIM...",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Image width="80vw" src=aol />
      <Appear>
        <Heading size textColor lineHeight> {rs("AMERICA ONLINE!")} </Heading>
      </Appear>
      <Notes> {rs("Does anyone remember this UI?")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Image width="40vh" src=palm />
      <Notes>
        {rs(
           "I really want to emphasize that a lot of technology started off small or not mainstream, like email or chats, but in the following decades would become the future. A great example is handheld computers, like the Palm Pilot. Obviously, no one is using these today, but the next decade would see the birth of smart phones. If you want to see the future, look to the past to figure out where we might be going. This will be a recurring theme in my talk.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("JS -> ECMA")} </Text>
      <Notes>
        {rs(
           "JavaScript appeared in the middle of the 90s, and was a language for designers. But by the end of the decade, JavaScript was being standardized across tech through committee, and its future looked bright.",
         )}
      </Notes>
    </Slide>
    // <Slide transition=["slide"]>
    //   <Table style>
    //     <Tr style>
    //       <Td style> <Image width="30vw" src=etn /> </Td>
    //       <Td style> <Image width="30vw" src=etngif /> </Td>
    //     </Tr>
    //   </Table>
    //   <Text textSize="40" textColor fit=false> {rs("DHTML!")} </Text>
    //   <Notes>
    //     {rs(
    //        "...And some kid made some crappy websites with lots of cash-for-clicks links. I brought this up, not to show my horrible pre-teen design sense, but to point out a scary trend. I wrote this in Frontpage. That was a Microsoft product. Microsoft wanted you to write pages in DHTML. Yeah, WTF is that? It was Microsoft's proprietary branding of HTML, CSS and JS working together. They called it Dynamic HTML. And it's this kind of splintering that can plague a platform and would become a huge problem in the following decade.",
    //      )}
    //   </Notes>
    // </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("HOW SHOULD A WEB APP WORK?")}
      </Text>
      <Text textSize="100" textColor fit=false> {rs("(90s EDITION)")} </Text>
      <Notes>
        {rs(
           "So, how were we writing and structuring non-trivial web apps in the 1990s?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("SERVER RENDERING")}
      </Text>
      <Appear>
        <Text textSize="50" textColor fit=false>
          {rs("HOW TO DEAL WITH DATA CHANGE?")}
        </Text>
      </Appear>
      <Appear>
        <Text textSize="50" textColor fit=false>
          {rs("SEND NEW PAGE, STUPID")}
        </Text>
      </Appear>
      <Notes>
        {rs(
           "Render the markup on the server, send it over the wire to the user. Of course, if data changed, you would need to update the View. How would you do this? Obviously the server would just render a new document and send the new markup. Simple. What was the UX? Well, a user would interact with something, an underlying web form element would handle the input, if it was a big change, it would need to send it to the server, the server would send a whole new markup. The whole page would refresh. But who cared? No one. This was a new platform, the wild west. Have you seen Geocities?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("THE FUTURE LOOKED BRIGHT")}
      </Text>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <BlockQuote>
        <Quote textColor>
          {rs(
             "\"...reliably compose JavaScript programs out of components and libraries and to write object-oriented programs.\"",
           )}
        </Quote>
        <Cite> {rs("Waldemar Horwat at Netscape")} </Cite>
        <Appear> <Cite> {rs("(1999)")} </Cite> </Appear>
      </BlockQuote>
      <Notes>
        {rs(
           "JavaScript appeared in the middle of the 90s, and was a language for designers. But by the end of the decade, JavaScript was being standardized across tech through official international committee, and its future looked bright. It looked like it was on the cusp of becoming a full language.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("THE 2000s")} </Text>
      <Notes> {rs("The 2000s")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("ES4")} </Text>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <BlockQuote>
        <Quote textColor>
          {rs(
             "Composable, modular programming-in-the-large language, static typing, generators & iterators, destructuring, algebraic data types for functional programming...",
           )}
        </Quote>
        <Cite> {rs("ES4?")} </Cite>
      </BlockQuote>
      <Notes>
        {rs(
           "Who here has used ES4? The promise of ES4 was a lot of what we heard as the promise of the language at the end of the 90s. ",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs(";-(")} </Text>
      <Notes>
        {rs(
           "ES4, after infighting, industry splintering, was abandoned. A few small things were added to the language, from ES3->ES5, and we lost almost an entire decade of language development. Some of the ambitious stuff was moved to ES6 HARMONY.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("HOW SHOULD A WEB APP WORK?")}
      </Text>
      <Text textSize="100" textColor fit=false>
        {rs("(2000s EDITION)")}
      </Text>
      <Notes>
        {rs(
           "So, how were we writing and structuring non-trivial web apps in the 2000s?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("SERVER RENDERING")}
      </Text>
      <Appear>
        <Text textSize="100" textColor fit=false>
          {rs("AJAX + DOM NODE MANIPULATION")}
        </Text>
      </Appear>
      <Appear>
        <Text textSize="50" textColor fit=false>
          {rs("HOW TO DEAL WITH DATA CHANGE?")}
        </Text>
      </Appear>
      <Appear>
        <Text textSize="50" textColor fit=false>
          {rs("CHANGE THE DOM NODE, STUPID")}
        </Text>
      </Appear>
      <Notes>
        {rs(
           "Render the markup on the server, send it over the wire to the user. But you might include some more JavaScript, maybe you're using jQuery, on the frontend to handle dynamic updates based on user interactions. They clicked added a comment? Maybe it's simple enough that you can handle that UI state update on the frontend, maybe you send the event to the server, process, and send back updates, then use direct DOM manipulation. So, you traverse the entire DOM tree, find the node or nodes you want to change, and then you just change them. What a wonderful world. What could go wrong?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("HOW SHOULD A WEB APP CODE BE STRUCTURED?")}
      </Text>
      <Appear>
        <Text textSize="100" textColor fit=false> {rs("MVC")} </Text>
      </Appear>
      <Notes>
        {rs(
           "MVC became popular in the 90s and in the 2000s became default way to architect web apps",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("ES5")} </Text>
      <Text textSize="100" textColor fit=false> {rs("+ Node Arrives")} </Text>
      <Notes>
        {rs(
           "The decade was frought with splintering, but development of more specific async page updates, and the decade closed out with a bang. ES5 and Node.JS dropped in 2009, which would pave the way for the rapid advancement of the 2010s.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("Node & npm")} </Text>
      <Notes>
        {rs(
           "Node & npm and CommonJS modules really changed the way we develop code. Run JS on the server, run it in the client. Look for a library on npm, `npm install` nd now you're cooking with gas. The 2010s was like an explosive rebirth of JS.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("CoffeeScript & Language Extension")}
      </Text>
      <Notes>
        {rs(
           "CoffeeScript brought us a lot of language features that the community was tired of waiting around for. Many of CoffeeScript's features are in the language now",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("FAXJS")} </Text>
      <Notes>
        {rs(
           "Anyone ever heard of this? I want to take a look at this. Look at the example MainComponet and PersonDisplayer functions. Look at projectManager/createFaxProjectHere.js. Looks familiar? This is Jordan Walke's React prototype. He would go on to build the framework and release it in 2013.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("REACT")} </Text>
      <Notes>
        {rs(
           "React was hugely influential. Declarative UI, Virtual DOM, Unidirectional Data Flow. Reduce side effects. Make it easy and fun to write UI again.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("FLUX (& REDUX)")} </Text>
      <Notes>
        {rs(
           "Flux & Redux. One way data flow, through a dispatcher, create a new store, all through an uninterruptable function call. Reduce side effects.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("CROSS PLATFORM JS")}
      </Text>
      <Text textSize="100" textColor fit=false> {rs("JS EVERYWHERE")} </Text>
      <Notes> {rs("Electron, React Native (Jordan Walke again)")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("BUNDLERS (WEBPACK, ET AL)")}
      </Text>
      <Text textSize="100" textColor fit=false> {rs("Why?")} </Text>
      <Notes>
        {rs(
           "Bundlers (webpack). Why do we need them? CommonJS+Node....but now we have ESM support...will webpack be dead soon?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("Babel")} </Text>
      <Text textSize="100" textColor fit=false> {rs("Why?")} </Text>
      <Notes> {rs("Babel")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("ESLINT & PRETTIER")}
      </Text>
      <Text textSize="100" textColor fit=false> {rs("Why?")} </Text>
      <Notes> {rs("ESLint & Prettier")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Typed JavaScript")}
      </Text>
      <Notes> {rs("TypeScript, Flow")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Image src=stacksplit1 width="100vw" />
      <Notes>
        {rs(
           "I would argue that in the previous decades' paradigms, our efforts in building web apps might be split somewhat like this. Heavier on the DB and the Backend, especially in server rendered templated apps, and what the 2010s especially brought to us was power back to the Javascript and the frontend.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Image src=stacksplit2 width="100vw" />
      <Notes>
        {rs(
           "By the end of the decade, we were controlling so much more from our frontend code. Anybody build a simple fullstack app recently? Where was the most work done? You rendering business logic? Your state updates? \"Middleware\"? DB queries? Especially with tools like React and GraphQL, Redux, etc. Our frontend techonolgies smarter, and doing more lifting, so it's even more important to choose the right one. The one that will be easiest to write, maintain, and extend. ",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("HOW SHOULD A WEB APP WORK?")}
      </Text>
      <Text textSize="100" textColor fit=false>
        {rs("(Late 2010s EDITION)")}
      </Text>
      <Notes>
        {rs(
           "React or another composable JS framework. Maybe if you're embracing trends, you are using a type system on top of JavaScript,like TypeScript or Flow.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("What does the future look like?")}
      </Text>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs("React...again.")} </Text>
      <Notes>
        {rs(
           "React pushed us towards functional, declarative UIs, with immutability baked in to the patterns and best practices. But not everyone embraced React's functional patterns and you could still write mutations.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false> {rs({j|🎣|j})} </Text>
      <Appear>
        <Text textSize="100" textColor fit=false> {rs("Hooks")} </Text>
      </Appear>
      <Notes>
        {rs(
           "Why? Why functional components? Why now stateful functional components? Why change the API so much? Performance? No. UX. Namely: Dev UX. How easy is this code to understand, maintain, and extend? How easy is it to Reason about?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("How easy is my code to Reason about?")}
      </Text>
      <Notes>
        {rs(
           "I will argue that this is the most important part of coding UI. We're not trying to beat a compiler. Or the plethora of abstraction layers before it is finally run in a form that a machine can understand. We are writing code for humans.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("What should a future framework look like?")}
      </Text>
      <Notes>
        {rs(
           "So, we are at the present in my talk. We have some pretty awesome tools in our stack. Where do we go from here? What should a framework or language or set of tool in the future look like?",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("It should be:")}
      </Heading>
      <List>
        <Appear> <ListItem textSize> {rs("Type safe.")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Fast. Like, really, really fast.")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("Less possible bugs.")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("Easy to read and write.")} </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "our intellectual powers are rather geared to master static relations and that our powers to visualize processes evolving in time are relatively poorly developed. For that reason we should do (as wise programmers aware of our limitations) our utmost best to shorten the conceptual gap between the static program and the dynamic process, to make the correspondence between the program (spread out in text space) and the process (spread out in time) as trivial as possible. - Dijkstra",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("A step further...")}
      </Heading>
      <List>
        <Appear>
          <ListItem textSize>
            {rs("Less tooling & tooling boilerplate")}
          </ListItem>
        </Appear>
        <Appear> <ListItem textSize> {rs("Immutable")} </ListItem> </Appear>
        <Appear> <ListItem textSize> {rs("Pure")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Declarative. Fully embrace functional")}
          </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "We're making a wishlist, right? So we can take it a step further. Less tooling = I want to focus on writing my UI, not configuring my setup.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("Get crazy with it:")}
      </Heading>
      <List>
        <Appear>
          <ListItem textSize>
            {rs(
               "Type safe? How about 100% type safety and soundness coverage?!",
             )}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("ES2020? How about ES2030?!")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Run Anywhere. Super Fast and Natively!")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("Write the React way.")} </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("THE FUTURE IS NOW.")}
      </Text>
      <Appear>
        <Text textSize="100" textColor fit=false>
          {rs("AND IT'S IN PROD...")}
        </Text>
      </Appear>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("...AND USED BY HUNDREDS OF MILLIONS OF USERS")}
      </Text>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Image src=reason width="100vw" />
      <Notes> {rs("It's called ReasonML.")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("What is Reason?")}
      </Heading>
      <List>
        <Appear>
          <ListItem textSize> {rs("NOT Machine Learning")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("Made by Jordan Walke (who?)")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Syntax over OCaml for easy onboarding JS/React devs")}
          </ListItem>
        </Appear>
        <Appear> <ListItem textSize> {rs("Used at FB.")} </ListItem> </Appear>
      </List>
      <Notes>
        {rs(
           "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("Why use Reason?")}
      </Heading>
      <List>
        <Appear>
          <ListItem textSize>
            {rs("\"Picked up where React left off\"")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Pure, Immutable, Functional by default")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("\"ES2030 now.\" Advanced language features.")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("Run natively, tiny & fast af")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize> {rs("JS Everywhere! ...is broken")} </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("How Reason Works")}
      </Heading>
      <List>
        <Appear> <ListItem textSize> {rs("The AST")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize> {rs("Everything's a module*")} </ListItem>
        </Appear>
        <Appear> <ListItem textSize> {rs("Interop/FFI")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize>
            {rs("\"React pricinples brought to the language level\"")}
          </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("Reason Ecosystem")}
      </Heading>
      <List>
        <Appear> <ListItem textSize> {rs("ReasonML")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize> {rs("Target web? => BuckleScript")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Want to write React? => ReasonReact")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Want to write ReactNative? => ReasonReactNative")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Want to run Jest-like tests? => Rely")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("Use a better Electron? => ReveryUI")}
          </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "Let's learn more about these with some demos.",
         )}
      </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading size textColor lineHeight> {rs("Some Code")} </Heading>
    </Slide>
    <CodePane
      lang="reason"
      source="    let age = 25;"
      margin="auto"
      overflow="overflow"
      textSize=30
    />
    <CodePane
      lang="reason"
      source="    let age = 25;
    Js.log(\"My age is \" + age); /* Nope */"
      margin="auto"
      overflow="overflow"
      textSize=30
    />
    <CodePane
      lang="reason"
      source="    let age = 25;
    Js.log(\"My age is \" + age); /* Nope */
    Js.log2(\"My age is \", age); /* \"My age is \" 25 */"
      margin="auto"
      overflow="overflow"
      textSize=30
    />
    <CodePane
      lang="reason"
      source="    let age = 25;
    Js.log(\"My age is \" + age); /* Nope */
    Js.log2(\"My age is \", age); /* \"My age is \" 25 */
    Js.log(\"My age is \" ++ string_of_int(age)); /* \"My age is 25\" */"
      margin="auto"
      overflow="overflow"
      textSize=30
    />
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Shut up.")}
      </Text>
      <Text textSize="100" textColor fit=false>
        {rs("Show me something cool.")}
      </Text>
      <Notes> {rs("")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Meta Demo")}
      </Text>
      <Notes> {rs("This presentation was written in ReasonReact + custom bindings for Spectacle. Checkout out how fast bucklescript works.")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Revery Demo")}
      </Text>
      <Notes> {rs("Ken Wheeler is a beast. He also love beats. He modeled a real life beat making hardware into a reason app, using revery. And the archive is 2mbs. And check out how fast it loads. Bye bye, electron.")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Reason React Native")}
      </Text>
      <Notes> {rs("Init a new project. Watch bsb go!")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Text textSize="100" textColor fit=false>
        {rs("Reason React Native")}
      </Text>
      <Notes> {rs("React Navigation bindings. I'm writing a production app in Reason React Native, and my biggest fear was being limited in what libs I could use. Something about 'use any packages from the js world' somehow didn't click right away. Now, I spend almost no time wrapping a library (if there are reason bindings) and spend way more time choosing libs and writing ui.")} </Notes>
    </Slide>
    <Slide transition=["slide"]>
      <Heading textColor lineHeight="1" size=4>
        {rs("Why & Why Not Reason")}
      </Heading>
      <List>
        <Appear> <ListItem textSize> {rs("ReasonML")} </ListItem> </Appear>
        <Appear>
          <ListItem textSize> {rs("(+) type inference for free")} </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("(+) easier to reason about")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("(+) less bugs")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("(+) easy to pickup for JS/React devs")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("(+) fast, native, cross-platform")}
          </ListItem>
        </Appear>
        <Appear>
          <ListItem textSize>
            {rs("(-) new sytnax to learn")}
          </ListItem>
        </Appear>
      </List>
      <Notes>
        {rs(
           "Heck, let's go wild. I don't want the language features of today, I want the language features of 10 years from now!",
         )}
      </Notes>
    </Slide>
  </Deck>;
};