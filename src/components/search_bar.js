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


//Once searchbar has a state and its changed, the component will be re-rendered
//Whenever a new instance of SearchBar gets called <SearchBar />, the constructor
//Gets called and initializes that object - We also initialize Component with super

  //Internal properties we want to change, update, the state of the component
        //Will contain properties we want to record about the state
        //In our case the term refers to user input, we need to update term based on the user input
        //As the user starts typing, we need to update the term

class SearchBar extends Component{
    constructor(props){
        super(props);

        //Default value on initialization - instead of console.log, need to update state
        //This is the only time we will write code this way to manipulate our state because
        //creation is different then updating.
        this.state = {term: 'Starting Value'}

    }
    render(){                            //Update state here in handler function
        //Set new state by passing in object  - setState to update the state
        //A bad way to do it - this.state.term = event.target.value - dont do it
        //We need to tell react the state is changing so it can re-render
                      
         //Reference a JS variable inside of JSX, need curly brackets
         //Updating components? Think state. How? this.setState({})

         //New concept of control field / input / form element.
         //Its an input field or form element that is set by the state, rather than the
         //User input setting the state. We want the state to tell the input what the current
         //Value should be. value={this.term.state} is a controlled field
         //value = this.state.term actually provides us with two things. One is providing
         //a default value for the input, without having to wait for user input
         //the second is that it allows for reading input very easily, rather than having
         //to use jquery for everything, we can just read the value by using this.state.term or w.e

        

        return (
            <div className="search-bar">
              <input 
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
        //<input onChange={this.onInputChange}
        //JSX with regulasr JS variables - 
        //we wrap it in curly braces onChange is the event
         //this.inputchange is  the event handler 
        
    }

    onInputChange(term){

        this.setState({term: term});
        this.props.onSearchTermChange(term);

    }
}

//WE only want to export the SearchBar component and not any surrounding code in the file

export default SearchBar;
