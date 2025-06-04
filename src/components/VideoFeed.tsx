import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Video } from '../types/video';
import VideoPlayer from './VideoPlayer';
import VideoOverlay from './VideoOverlay';

interface VideoFeedProps {
  videos: Video[];
}

const VideoFeed: React.FC<VideoFeedProps> = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Set up intersection observer to detect which video is in view
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // 80% of the item must be visible
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    videoRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' && activeIndex > 0) {
        scrollToVideo(activeIndex - 1);
      } else if (e.key === 'ArrowDown' && activeIndex < videos.length - 1) {
        scrollToVideo(activeIndex + 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, videos.length]);

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
    setTouchEnd(null);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 50;
    
    if (isSignificantSwipe) {
      if (distance > 0 && activeIndex < videos.length - 1) {
        // Swipe up - go to next video
        scrollToVideo(activeIndex + 1);
      } else if (distance < 0 && activeIndex > 0) {
        // Swipe down - go to previous video
        scrollToVideo(activeIndex - 1);
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Function to scroll to a specific video
  const scrollToVideo = (index: number) => {
    if (index < 0 || index >= videos.length) return;
    
    setIsScrolling(true);
    videoRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    
    // Set active index and reset scrolling state after animation
    setTimeout(() => {
      setActiveIndex(index);
      setIsScrolling(false);
    }, 500);
  };

  // Navigation buttons
  const renderNavigationButtons = () => (
    <div className="fixed right-6 bottom-1/2 transform translate-y-1/2 flex flex-col gap-4 z-20">
      <button
        onClick={() => scrollToVideo(activeIndex - 1)}
        disabled={activeIndex === 0 || isScrolling}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          activeIndex === 0 ? 'bg-gray-800/30 text-gray-500' : 'bg-gray-800/60 text-white hover:bg-gray-700/60'
        } backdrop-blur-sm transition-colors`}
        aria-label="Previous video"
      >
        <ChevronUp size={24} />
      </button>
      
      <button
        onClick={() => scrollToVideo(activeIndex + 1)}
        disabled={activeIndex === videos.length - 1 || isScrolling}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          activeIndex === videos.length - 1 ? 'bg-gray-800/30 text-gray-500' : 'bg-gray-800/60 text-white hover:bg-gray-700/60'
        } backdrop-blur-sm transition-colors`}
        aria-label="Next video"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          ref={el => (videoRefs.current[index] = el)}
          data-index={index}
          className="h-screen w-full snap-start snap-always relative"
        >
          <VideoPlayer 
            video={video} 
            isActive={activeIndex === index}
          />
          <VideoOverlay video={video} />
        </div>
      ))}
      
      {/* Only show navigation buttons on desktop */}
      <div className="hidden md:block">
        {renderNavigationButtons()}
      </div>
    </div>
  );
};

export default VideoFeed;