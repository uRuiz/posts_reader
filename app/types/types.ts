export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

interface User {
  id: number;
  username: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
}
