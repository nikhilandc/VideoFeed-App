import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Video } from '../types/video';

interface ActionButtonsProps {
  video: Video;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video.stats.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={handleLike}
        className="flex flex-col items-center gap-1 transition-transform transform hover:scale-110 active:scale-95"
        aria-label="Like"
      >
        <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Heart 
            size={28} 
            className={`${liked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`} 
          />
        </div>
        <span className="text-white text-sm font-medium">{formatCount(likeCount)}</span>
      </button>

      <button 
        className="flex flex-col items-center gap-1 transition-transform transform hover:scale-110 active:scale-95"
        aria-label="Comment"
      >
        <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <MessageCircle size={28} className="text-white" />
        </div>
        <span className="text-white text-sm font-medium">{formatCount(video.stats.comments)}</span>
      </button>

      <button 
        className="flex flex-col items-center gap-1 transition-transform transform hover:scale-110 active:scale-95"
        aria-label="Share"
      >
        <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Share2 size={28} className="text-white" />
        </div>
        <span className="text-white text-sm font-medium">{formatCount(video.stats.shares)}</span>
      </button>
    </div>
  );
};

export default ActionButtons;