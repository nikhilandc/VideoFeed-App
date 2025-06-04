export interface Video {
  id: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  creator: {
    username: string;
    avatarUrl: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}