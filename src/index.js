//Every module is seperate in react, need to import to gain access
//Find the library installed in my application as a dependency in the node_modules folder
//And assign that library to the variable React
//cmd npm install --save youtube-api-search
//--save saves it to our package.json file  which is a list of all the dependencies
//that our project has

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-DOM';

//YTSearch acts like a function which gets parameters of searchterm and api key
import YTSearch from 'youtube-api-search';

//For our own user-made files we need to include relative path, unlike downloaded folders and
//dependencies which are entire namespaces.for Libraries that we installed with npm we can
//just write name of the package
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCXE7B7GWJhJ1262cLCr8JA4rar5zPqJB4';

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

//As of now, App is a functional component rather than a class component because
//it has no concept of state

//We need to update App to a class based component because its state is going to change
//due to the fact that we are going to pass down information (downflow) as this is the
//parent app and we are going to pass it down to the children components. this data
//that we get inside the app is going to change due to the videos that we receive
//Changing data means changing states 

/**We'll use a functio library called lowdash whichc contains many utility functions like
 *  debounce to throttle how often a function is called 
 * We need to install this library using node package manager*/
class App extends Component{
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     }; //Defaulted at video objects, We dont want to leave this empty
                                //At startup because we dont want to show the user the data right away

    //Callback returns data (like a get request) - returns a list of objects
    //More specifically we are returning a list of videos. But our key name is also videos
    //ES6 provides us with new functionality when keys and values are the same. ->
    //One line statements
    //Remember that JS is asynchronous so as we are fetching the videos we will continue
    //Running our JS and perform the callback function once all videos have been returned
    //This essentially means that it can continue rendering other components in the meantime
    //The first round of rendering can produce 0 videos and once they have all been fetched
    //The component will re-render in the callback function 

    this.videoSearch('Chris Brown')
  
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({ 
        videos: videos,
        selectedVideo: videos[0],

       }); //this.setState({ videos: videos }) same as this.setState({ videos })
    });
  }

  //Clearly our videoList needs access to videos list in state of app
  //We need to pass data from parent component (app) to child component
  //What do we do!? Define props!! wohoo- pass down from parent to child
  //Whenever the app re-renders, VideoList will get the new list as well

  //To select a video, we will pass down a callback function from App -> VideoList ->
  //VideoListItem because App never interacts with VideoListItem, it only interacts
  //With VideoList. However, VideoList does interact with VideoList item. That's where
  //the connection lies. So we will pass it down.
  //The way it works is that the function is passed all the way down to video list item
  //And once the function is called (on a click), the app gets re-rendered 
  //And videodetail gets the initial selected video

  render(){
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
    return( 
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} /> 
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/> 
      </div>
    );
  }
};

//Step 2: A couple of wrong ways to approch the rendering to the DOM. Need to pass instance,
//not class, to render
ReactDOM.render(<App />, document.querySelector('.container')); //but where to on the page??? need existing html node






