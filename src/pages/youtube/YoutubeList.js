import React from 'react';

import Youtube from './youtube';

export default function YoutubeList ({ videoData }) {
    
    console.log("In YoutubeList.js")
    console.log(videoData);

    return (
        <div>
            {videoData.map((video) => {
                return <Youtube key={video.id.videoId} video={video} />
            })}
        </div>
    )
}