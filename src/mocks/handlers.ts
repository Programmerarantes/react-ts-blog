import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://my-blog-strapi-06zj.onrender.com/api/articles', () => {
    return HttpResponse.json({
        data: [
          {
            id: 1,
            attributes: {
              title: 'Test Article',
              publishedAt: '2023-09-30T12:00:00Z',
              description: 'This is a test description for the article.',
              image: { data: { attributes: { url: 'https://example.com/image.jpg' } } },
              category: { data: { attributes: { name: 'Test Category' } } },
              authorsBio: { data: { attributes: { name: 'John Doe' } } }
            }
          },
          {
            id: 2,
            attributes: {
              title: 'Test Article',
              publishedAt: '2023-09-30T12:00:00Z',
              description: 'This is a test description for the article.',
              image: { data: { attributes: { url: 'https://example.com/image.jpg' } } },
              category: { data: { attributes: { name: 'Test Category' } } },
              authorsBio: { data: { attributes: { name: 'John Doe' } } }
            }
          },
          {
            id: 3,
            attributes: {
              title: 'Test Article',
              publishedAt: '2023-09-30T12:00:00Z',
              description: 'This is a test description for the article.',
              image: { data: { attributes: { url: 'https://example.com/image.jpg' } } },
              category: { data: { attributes: { name: 'Test Category' } } },
              authorsBio: { data: { attributes: { name: 'John Doe' } } }
            }
          }
        ],
        meta: { pagination: { total: 1 } }
      })
    
  })
];
