//Every module is seperate in react, need to import to gain access
//Find the library installed in my application as a dependency in the node_modules folder
//And assign that library to the variable React
import React from 'react';
import ReactDOM from 'react-DOM';

//Create components (views) that produce HTML using js (webpack and babel transpile)
//The JSX and ES6 to standard JS the browser can run
//Take the generated HTML (component) and render it on the page - DOM

//Writing some code the wrong way to see how things work and troubleshoot them
//Again, const is an ES6 thing which says the value cannot be changed or defined
//App = 5, will not work since it is constant.
//<div>Hi!</div> on the other hand is a JSX thing, in general we cant write HTML inside
//of our javascript, but JSX is a dialect of JS that allows us to write what "looks" like 
//HTML, but is actually javascript. The code in the browiser is not <div>HI<div>.. cause its not really HTML
//Our syntax looks similar to HTML but truly it is being transpiled to vanilla js, we write it this way
//Because it makes things much more easier . Behind the scenes its creating elements with js,
//Adding texts.. etc.
//That is the exact purpose of JSX. When we have complex components we want to make the code,
//A lot more clean and legible, the transpiling is done behind the scenes


//So this is step one. Create component, produce HTML. This was originally wrong because
//We are passing in a class when it expects an instance of a class. When we create a component
//We are passing the App class to ReactDOM.render when it is expecting an instance of a class
//We have diff types of apps or components, we want to render them not their classes. So we want to render
//an instance by adding < /> in JSX 

//This is a class or component, not an actual instance. We want to pass render an instance,
//of a class. 
//Essentially what we will do is divide things into components and the app will be
//The largest component which contains all components which we can render to the dom
//by append to the html container. Index is the root of our application. One component
//per file is the way to go. Best way for seperation


const App = () => {
    return <div>Hi!</div>
}

//Step 2: A couple of wrong ways to approch the rendering to the DOM. Need to pass instance,
//not class, to render
ReactDOM.render(<App />, document.querySelector('.container')); //but where to on the page??? need existing html node






