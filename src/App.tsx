import React from 'react';
import VideoFeed from './components/VideoFeed';
import { videos } from './data/videos';
import useVisibilityChange from './hooks/useVisibilityChange';

function App() {
  // Track page visibility to optimize video playback
  const isPageVisible = useVisibilityChange();

  return (
    <div className="fixed inset-0 bg-black">
      {isPageVisible && <VideoFeed videos={videos} />}
      
      {/* Show a message when the page is not visible */}
      {!isPageVisible && (
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-white text-xl">Video paused</p>
        </div>
      )}
    </div>
  );
}

export default App;