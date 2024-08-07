
export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
}

export interface ImageData {
  attributes: {
    url: string;
  };
}

export interface Image {
  data: ImageData | null;
}

export interface PostAttributes {
  title: string;
  description: string;
  image: Image;
  publishedAt: string;
}

export interface PostData {
  id: number;
  attributes: PostAttributes;
}

export interface ApiResponse {
  data: PostData[];
}
