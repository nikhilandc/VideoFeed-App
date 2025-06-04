import React from 'react';
import { X } from 'lucide-react';
import { Video } from '../types/video';

interface InfoDrawerProps {
  video: Video;
  isOpen: boolean;
  onClose: () => void;
}

const InfoDrawer: React.FC<InfoDrawerProps> = ({ video, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '70vh' }}
        aria-modal="true"
        role="dialog"
        aria-labelledby="drawer-title"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 id="drawer-title" className="text-xl font-bold text-white">Video Details</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800 transition-colors"
            aria-label="Close drawer"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Drawer content */}
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(70vh - 70px)' }}>
          <div className="flex gap-4 mb-4">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              <div className="flex items-center mt-1">
                <img
                  src={video.creator.avatarUrl}
                  alt={video.creator.username}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-blue-400">{video.creator.username}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-400 text-sm mb-2">Description</h4>
            <p className="text-white">{video.description}</p>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Likes</span>
              <span className="text-white font-medium">{video.stats.likes}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Comments</span>
              <span className="text-white font-medium">{video.stats.comments}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shares</span>
              <span className="text-white font-medium">{video.stats.shares}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDrawer;