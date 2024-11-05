export interface Article {
  id: number;
  attributes: ArticleAttributes

}
export interface ArticleAttributes {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  category: {
    data: {
      attributes: {
        name: string;
        slug: string;
      };
    };
  };
  authorsBio: {
    data: {
      attributes: {
        name: string;
      };
    };
  };

}


export interface Author {
  id: number;
  attributes: {
    name: string;
    instagram?: string;
    whatsapp?: string;
    role: string;
    avatar: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string
            }
          }
          url?: string;
        };
      };
    };
  };
}

export interface ArticleApiResponse {
  data: Article[]
}