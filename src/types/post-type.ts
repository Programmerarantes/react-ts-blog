export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
}

export interface PostFetchResponse {
  data: {
    Post: Post[]
  }
}