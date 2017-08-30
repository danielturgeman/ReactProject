//Video list item doesnt change. So we'll use a functional component
import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    // const video = props.video; if we pass in props as parameter
    //otherwise we can simply pass in parameters {video} - curly braces for ES6 not JSX

    return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item ">
      <div className="video-list media">
        <div className="media-left">
            <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
            <div className="media-heading">
                {video.snippet.title}   
            </div>
        </div>
      </div>
    </li>
    )
};

export default VideoListItem;
   