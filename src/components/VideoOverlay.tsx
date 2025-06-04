import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import { Video } from '../types/video';
import ActionButtons from './ActionButtons';
import InfoDrawer from './InfoDrawer';

interface VideoOverlayProps {
  video: Video;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ video }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  
  return (
    <>
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
      
      {/* Top navigation */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-center">
        <div className="h-1 w-16 bg-white/30 rounded-full" />
      </div>
      
      {/* Creator info - bottom left */}
      <div className="absolute bottom-24 left-4 max-w-[70%]">
        <h3 className="text-white font-bold text-lg drop-shadow-lg">
          {video.creator.username}
        </h3>
        <p className="text-white/90 text-sm line-clamp-2 drop-shadow-lg mt-1">
          {video.title}
        </p>
      </div>
      
      {/* Action buttons - bottom right */}
      <div className="absolute bottom-20 right-4">
        <ActionButtons video={video} />
      </div>
      
      {/* More info button - center bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => setIsInfoOpen(true)}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white transition-colors hover:bg-white/20"
          aria-label="Show more information"
        >
          <Info size={18} />
          <span>More Info</span>
          <ChevronDown size={18} />
        </button>
      </div>
      
      {/* Info drawer */}
      <InfoDrawer
        video={video}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </>
  );
};

export default VideoOverlay;