export const reactQuestions = [
  {
    id: "r1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "r2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "r3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "r4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: "r5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "r6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.",
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
  },
  {
    id: "r7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "r8",
    text: "What is the purpose of a key prop in React?",
    answers: [
      "To help React identify which items have changed, are added, or are removed.",
      "To set a unique identifier for each component.",
      "To manage state across different components.",
      "To handle conditional rendering more effectively.",
    ],
  },
  {
    id: "r9",
    text: "Which method in React is used to create a context?",
    answers: [
      "React.createContext()",
      "React.useContext()",
      "React.Context()",
      "React.Provider()",
    ],
  },
  {
    id: "r10",
    text: "What is a side effect in React?",
    answers: [
      "Anything that affects something outside the scope of the function being executed.",
      "A change to the state of a component.",
      "A rendering process in React.",
      "An error that occurs during the execution of the component.",
    ],
  },
];

export const javascriptQuestions = [
  {
    id: "js1",
    text: "Which of the following is a JavaScript framework?",
    answers: ["Angular", "HTML", "CSS", "Python"],
  },
  {
    id: "js2",
    text: "What is the purpose of the 'let' keyword in JavaScript?",
    answers: [
      "To declare a block-scoped local variable, optionally initializing it to a value.",
      "To declare a constant variable.",
      "To declare a global variable.",
      "To create a function.",
    ],
  },
  {
    id: "js3",
    text: "What does the 'typeof' operator do?",
    answers: [
      "Returns a string indicating the type of the unevaluated operand.",
      "Returns the type of a variable.",
      "Compares two values.",
      "Converts a value to a string.",
    ],
  },
  {
    id: "js4",
    text: "What is an IIFE in JavaScript?",
    answers: [
      "An Immediately Invoked Function Expression.",
      "An internal function error.",
      "An interactive function execution.",
      "An inline function evaluation.",
    ],
  },
  {
    id: "js5",
    text: "Which of the following is NOT a JavaScript data type?",
    answers: ["Element", "Number", "String", "Boolean"],
  },
  {
    id: "js6",
    text: "How do you write a comment in JavaScript?",
    answers: [
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
    ],
  },
  {
    id: "js7",
    text: "What is 'NaN' in JavaScript?",
    answers: [
      "A value representing Not-a-Number.",
      "A number variable.",
      "A function.",
      "A null value.",
    ],
  },
  {
    id: "js8",
    text: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
  },
  {
    id: "js9",
    text: "What is the output of '2 + 2' in JavaScript?",
    answers: ["4", "22", "'2 + 2'", "Error"],
  },
  {
    id: "js10",
    text: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick", "onchange", "onmouseover", "onmouseclick"],
  },
];

export const nextjsQuestions = [
  {
    id: "n1",
    text: "What is Next.js primarily used for?",
    answers: [
      "Building server-side rendered React applications.",
      "Managing global state in React applications.",
      "Creating mobile applications.",
      "Handling database operations.",
    ],
  },
  {
    id: "n2",
    text: "Which of the following is a feature of Next.js?",
    answers: [
      "Automatic static optimization.",
      "Automatic code splitting.",
      "Inline CSS styling.",
      "State management.",
    ],
  },
  {
    id: "n3",
    text: "What file is used to define routes in a Next.js application?",
    answers: ["pages/_app.js", "routes.js", "index.js", "App.js"],
  },
  {
    id: "n4",
    text: "How do you create a dynamic route in Next.js?",
    answers: [
      "By creating a file in the pages directory with square brackets in the file name.",
      "By using the 'new' keyword.",
      "By creating a file in the routes directory.",
      "By adding a route in the next.config.js file.",
    ],
  },
  {
    id: "n5",
    text: "What command is used to start a Next.js development server?",
    answers: ["npm run dev", "npm start", "next build", "npm build"],
  },
  {
    id: "n6",
    text: "How do you fetch data for pre-rendering in Next.js?",
    answers: [
      "Using getStaticProps or getServerSideProps.",
      "Using fetch() in the componentDidMount lifecycle method.",
      "Using the render() method.",
      "Using the useEffect() hook.",
    ],
  },
  {
    id: "n7",
    text: "What is the use of the 'next/link' component?",
    answers: [
      "To enable client-side navigation between pages.",
      "To link external CSS files.",
      "To fetch data from an API.",
      "To handle form submissions.",
    ],
  },
  {
    id: "n8",
    text: "What is the purpose of 'next/head' component?",
    answers: [
      "To modify the head of the document, such as title and meta tags.",
      "To define headers for API routes.",
      "To create a new page.",
      "To handle routing in Next.js.",
    ],
  },
  {
    id: "n9",
    text: "Which function is used to enable static generation with data in Next.js?",
    answers: ["getStaticProps", "getData", "useStaticProps", "useEffect"],
  },
  {
    id: "n10",
    text: "What is the purpose of the '_app.js' file in a Next.js project?",
    answers: [
      "To override the default App component used by Next.js.",
      "To define API routes.",
      "To create a custom document structure.",
      "To handle server-side rendering.",
    ],
  },
];

export const nodejsQuestions = [
  {
    id: "n1",
    text: "What is Node.js?",
    answers: [
      "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      "A framework for building user interfaces.",
      "A library for managing state in web applications.",
      "A tool for creating static websites.",
    ],
  },
  {
    id: "n2",
    text: "Which module is used to create a server in Node.js?",
    answers: ["http", "fs", "url", "path"],
  },
  {
    id: "n3",
    text: "Which command is used to initialize a new Node.js project?",
    answers: ["npm init", "npm start", "node init", "npm new"],
  },
  {
    id: "n4",
    text: "What is the purpose of the 'package.json' file in a Node.js project?",
    answers: [
      "To manage the project's dependencies and metadata.",
      "To define the project's HTML structure.",
      "To handle database connections.",
      "To configure the project's web server.",
    ],
  },
  {
    id: "n5",
    text: "How do you install a package using npm?",
    answers: [
      "npm install <package-name>",
      "npm get <package-name>",
      "npm fetch <package-name>",
      "npm update <package-name>",
    ],
  },
  {
    id: "n6",
    text: "Which method is used to read a file in Node.js?",
    answers: [
      "fs.readFile()",
      "fs.read()",
      "fs.getFile()",
      "fs.readFileSync()",
    ],
  },
  {
    id: "n7",
    text: "What does the 'require' function do in Node.js?",
    answers: [
      "Imports a module for use in the current file.",
      "Exports a module for use in other files.",
      "Reads data from a file.",
      "Runs a Node.js script.",
    ],
  },
  {
    id: "n8",
    text: "How do you handle errors in asynchronous code in Node.js?",
    answers: [
      "By using callbacks or Promises.",
      "By using the 'throw' keyword.",
      "By using 'try' and 'catch' blocks.",
      "By using 'console.log()' to display errors.",
    ],
  },
  {
    id: "n9",
    text: "What is the purpose of the 'npm install' command?",
    answers: [
      "To install all the dependencies listed in the package.json file.",
      "To uninstall a package from the project.",
      "To start the Node.js application.",
      "To create a new Node.js project.",
    ],
  },
  {
    id: "n10",
    text: "Which of the following is a core module in Node.js?",
    answers: ["path", "express", "lodash", "mongoose"],
  },
];
