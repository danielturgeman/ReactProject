//Will use a functional component. Since it is just a list of videos,
//it doesnt record any user interaction or re-render itself, its just a list
//The actual videos are what changes. 

import React from 'react';
import VideoListItem from './video_list_item';



//Using bootstrap to add classes - remember that this is JSX, need to use className
//We dont want any naming conflicts.

//We pass down a prop object from App where we define props in the <VideoList />
//In a functional component that props is passed as a parameter, in a class component
//It can be accessed anywhere as this.props as we initialize it in the constructor
//This is a list of videos. What we need to do is render one video list item per video

//We'll use built in iterators over for loops. Makes life easier. Map iterator for example
//Use a built in helper called Map - its a propert of an array - Array.map returns a function
//E.g.

/*
var array = [1,2,3]
array.map(function(number){
    return number * 2;
 })

How is this useful...?
arr.map(function(number){
------------>return '<div>' + number + '</div>';   <------------
});
(3) ["<div>1</div>", "<div>2</div>", "<div>3</div>"]0: "<div>1</div>"1: "<div>2</div>"2: "<div>3</div>"
length: 3__proto__: Array(0)


*/

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem 
          onVideoSelect={props.onVideoSelect}
          key={video.etag} 
          video={video} 

        />

        );
        //Here im returning a list of components to videoItems -
        //Essentially what were doing is instantiating VideoListItems (videos)obj/components
        //with their own individual prop of video. The VideoListItem prop will be one
        //individual video item from our video list - and videoItems will contain all
        //Video Components with their own prop of video object. Why do we pass down
        //the video object/dictionary to video_list_item? Because it contains all the
        //details we need about each video, so if we pass it as a prop we can use it
        //in the VideoListItem class/function
        //Each video has a different etag.. unique id

    });


    //Video items is JSX, its a list of video items components with props, they a
    return (
        <ul className="col-md-4 list-group" >
        {videoItems} 
        </ul>
    );

};

export default VideoList;