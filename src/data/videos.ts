import { Video } from '../types/video';

// Working sample videos (public demo MP4 files)
export const videos: Video[] = [
  {
    id: '1',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl:
      'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    title: 'Big Buck Bunny',
    description:
      'A fun animated short film by the Blender Foundation.',
    creator: {
      username: '@blender',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
    },
    stats: {
      likes: 5421,
      comments: 312,
      shares: 98,
    },
  },

  {
    id: '2',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl:
      'https://orange.blender.org/wp-content/themes/orange/images/media/gallery/thumbs/ed_head.jpg',
    title: 'Elephants Dream',
    description:
      'The first Blender Open Movie project.',
    creator: {
      username: '@openmovie',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
    },
    stats: {
      likes: 2210,
      comments: 145,
      shares: 42,
    },
  },

  {
    id: '3',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl:
      'https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg',
    title: 'Tears Of Steel',
    description:
      'Sci-fi short film created using Blender tools.',
    creator: {
      username: '@scifiCreator',
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
    },
    stats: {
      likes: 3987,
      comments: 267,
      shares: 77,
    },
  },

  {
    id: '4',
    url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    thumbnailUrl:
      'https://dummyimage.com/600x400/000/fff&text=Sample+Video',
    title: 'Sample Video',
    description:
      'Simple short MP4 sample video for testing.',
    creator: {
      username: '@tester',
      avatarUrl: 'https://i.pravatar.cc/150?img=14',
    },
    stats: {
      likes: 1200,
      comments: 80,
      shares: 25,
    },
  },
];
