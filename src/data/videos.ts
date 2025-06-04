import { Video } from '../types/video';

// Sample video data using public domain/open source videos
export const videos: Video[] = [
  {
    id: '1',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
    description: 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes.',
    creator: {
      username: '@videoCreator',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    stats: {
      likes: 1204,
      comments: 87,
      shares: 32,
    },
  },
  {
    id: '2',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    title: 'Elephant Dream',
    description: 'The first Blender Open Movie from 2006. Follow Emo and Proog on their adventures in a strange mechanical world.',
    creator: {
      username: '@blenderArtist',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    stats: {
      likes: 3567,
      comments: 210,
      shares: 89,
    },
  },
  {
    id: '3',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
    description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps...',
    creator: {
      username: '@animationPro',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    stats: {
      likes: 5832,
      comments: 419,
      shares: 156,
    },
  },
  {
    id: '4',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    title: 'Tears of Steel',
    description: 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender.',
    creator: {
      username: '@blenderFoundation',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
    },
    stats: {
      likes: 2476,
      comments: 178,
      shares: 64,
    },
  },
];