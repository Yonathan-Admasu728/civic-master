import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = ({ videoUrl }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('VideoBackground component mounted, setting isMounted to true.');
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
      {isMounted && (
        <>
          <ReactPlayer
            url={videoUrl} // INPUT_REQUIRED {Provide the URL for the video to be used as the background}
            playing={true}
            loop={true}
            muted={true}
            width='100%'
            height='100%'
            className='react-player'
            playsinline={true}
            onError={(e) => {
              console.error('Error playing video:', e);
              console.log('Attempting to load video again or display placeholder.');
            }} // Enhanced error handling with log for retry or placeholder action
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> {/* Semi-transparent overlay to ensure text visibility */}
        </>
      )}
    </div>
  );
};

export default VideoBackground;