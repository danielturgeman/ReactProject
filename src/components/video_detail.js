//Only need a functional component, the state doesnt really change as we are passing
//the props down from App

import React from 'react';

const VideoDetail = ({video}) => {
if(!video){
    return <div>Loading...</div>;
}

const videoId = video.id.videoId;
//const url = 'https://www.youtube.com/embed/' + videoId;
//We'll use ES6 to make the url, string templating

const url = `https://www.youtube.com/embed/${videoId}`


//crafts a url which looks like youtube.com/embed..

    //embed-responsive which we wrap around an iframe
    return (
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
         </div>
        </div>
    )

}

export default VideoDetail;
