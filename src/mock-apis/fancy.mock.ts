import { FancyCategory, FancyListType } from '@/types/fancy';
import { http, HttpResponse } from 'msw';
const fashionData: FancyListType[] = [
  {
    id: 1,
    categoryImage:
      'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 2,
    categoryImage:
      'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
    ],
  },
  {
    id: 3,
    categoryImage:
      'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 1,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 2,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 3,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
        image:
          'https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg',
      },
      {
        id: 4,
        name: '엄청난 주얼리',
        price: 10000,
        tags: ['엄청난', '주얼리', '목걸이'],
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
