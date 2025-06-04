import React, { useRef, useEffect, useState } from 'react';
import { Video } from '../types/video';

interface VideoPlayerProps {
  video: Video;
  isActive: boolean;
  onVideoLoaded?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isActive, onVideoLoaded }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      onVideoLoaded?.();
    };

    videoElement.addEventListener('canplay', handleCanPlay);

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [onVideoLoaded]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isActive) {
      // Try to play the video when it becomes active
      const playPromise = videoElement.play();
      
      // Handle the play promise to avoid errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log('Auto-play was prevented:', error);
          });
      }
    } else {
      // Pause when not active
      videoElement.pause();
    }
  }, [isActive]);

  return (
    <div className="w-full h-full overflow-hidden bg-black">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <video
        ref={videoRef}
        src={video.url}
        className="object-cover w-full h-full"
        playsInline
        loop
        muted // Consider removing this in production or adding a mute/unmute button
        preload="auto"
        poster={video.thumbnailUrl}
      />
    </div>
  );
};

export default VideoPlayer;