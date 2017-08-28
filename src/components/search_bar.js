//The basic search input bar/ form will work as following:
//When the user enters input, we need to make an API request to the youtube API
//We will display our results eventually on a right-side navbar

//  --             import React from 'react';

// ES6 Syntax
import React, { Component } from 'react';
//Same as const Component = React.Component

/*The bridge between what we "learned" in class and what we learned here is happening.
In our case using a constant function, we are dealing with functional programming. One
input goes in, the other input goes out, straightforward.
We need to change these models to reflect changes, a sort of internal state keeping,
because values change, and not all output is the same, we need to make it more generic.
This component (searchbar) needs to be more aware of its internal state since users are
entering data. This component needs to tell the others that something has changed. We will
use class based (more intelligence/complexity) components over functional components
We will use ES6 classes rather than ES5 and previous "classes" which were functions acting
as classes
*/
/*const SearchBar = () => {
    return <input />;
;} */

//Gives our searchbar a ton of functionality from the React.Component class
//Every class component must have a render method. this is the syntax to define
//methods in a class (i guess we use the components render?)). We need to render it
//somehow - return some jsx - because now its a class and not a function. So ultimately
//We refactored from a function based component to a class based component because we
//Want to add functionality and properties...

class SearchBar extends Component{
    render(){
        return <input onChange={event => console.log(event.target.value)} /> //JSX with regulasr JS variables - 
                                                     //we wrap it in curly braces onChange is the event
                                                    //this.inputchange is  the event handler
        //<input onChange={this.onInputChange}
        
    }

    /*onInputChange(event){
        var target = event.target;
        console.log(target.value)
    }*/
}

//WE only want to export the SearchBar component and not any surrounding code in the file

export default SearchBar;
