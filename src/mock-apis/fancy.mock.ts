import { FancyCategory, FancyListType } from '@/types/fancy';
import { http, HttpResponse } from 'msw';
const fashionData: FancyListType[] = [
  {
    id: 1,
    categoryImage:
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 2,
    categoryImage:
      'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 3,
    categoryImage:
      'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 4,
    categoryImage:
      'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 5,
    categoryImage:
      'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 6,
    categoryImage:
      'https://cdn.pixabay.com/photo/2023/01/26/10/46/cat-7745585_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 7,
    categoryImage:
      'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: [
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
          {
            id: 121123,
            name: '엄청난',
            createdAt: '2024-07-09',
          },
        ],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
];

export const useFancyHandler = [
  //fancy option list조회 api
  http.get('/fancy/options', () => {
    const tempArr: FancyCategory[] = fashionData.map(
      ({ id, categoryImage, categoryName }) => {
        return { id, categoryImage, categoryName };
      }
    );
    return HttpResponse.json(tempArr);
  }),
];
