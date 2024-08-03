import {
  FancyCategory,
  FancyImagesType,
  FancyListType,
  FancyUnitType,
} from '@/types/fancy';
import { http, HttpResponse } from 'msw';
const fashionData: FancyListType[] = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
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
          'https://cdn.pixabay.com/photo/2019/04/12/20/56/cat-4123233_1280.jpg',
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
          'https://cdn.pixabay.com/photo/2017/08/20/20/48/cat-cat-2663108_1280.jpg',
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
          'https://cdn.pixabay.com/photo/2020/07/03/13/48/cat-5366394_1280.jpg',
      },
    ],
  },
  {
    id: 2,
    image:
      'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 5,
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
          'https://cdn.pixabay.com/photo/2017/11/03/04/01/pets-2913316_1280.jpg',
      },
      {
        id: 6,
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
          'https://cdn.pixabay.com/photo/2017/12/04/11/21/cat-2996769_1280.jpg',
      },
      {
        id: 7,
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
          'https://cdn.pixabay.com/photo/2018/03/24/17/57/cat-3257338_960_720.jpg',
      },
      {
        id: 8,
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
          'https://cdn.pixabay.com/photo/2020/04/19/20/33/cat-5065514_1280.jpg',
      },
    ],
  },
  {
    id: 3,
    image:
      'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 9,
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
          'https://cdn.pixabay.com/photo/2020/06/02/06/52/cat-5249722_1280.jpg',
      },
      {
        id: 10,
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
          'https://cdn.pixabay.com/photo/2020/05/25/21/06/cat-5220519_1280.jpg',
      },
      {
        id: 11,
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
          'https://cdn.pixabay.com/photo/2018/04/07/18/12/cat-3299151_1280.jpg',
      },
      {
        id: 12,
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
    image:
      'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
    image:
      'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
    image: 'https://cdn.pixabay.com/photo/2023/01/26/10/46/cat-7745585_640.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
    image:
      'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg',
    categoryName: 'office core',
    product: [
      {
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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

const FancyUnitData: FancyUnitType[] = [
  {
    id: 1,
    costPrice: 10000,
    price: 9000,
    discountRate: 10,
    name: '엄청난 주얼리',
    category: 'Office Core',
    description1:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    description2:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    quantity: 10,
    status: 'ACTIVE',
    options: [
      {
        id: 1,
        name: 'color',
        subOptions: [
          {
            id: 1,
            name: 'red',
            price: 0,
          },
          {
            id: 2,
            name: 'blue',
            price: 0,
          },
        ],
      },
      {
        id: 2,
        name: 'size',
        subOptions: [
          {
            id: 3,
            name: 'Ring No.13',
            price: 1000,
          },
          {
            id: 4,
            name: 'Ring No.14',
            price: 1000,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    costPrice: 10000,
    price: 9000,
    discountRate: 10,
    name: '엄청난 주얼리',
    category: 'Office Core',
    description1:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    description2:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    quantity: 10,
    status: 'ACTIVE',
    options: [
      {
        id: 1,
        name: 'color',
        subOptions: [
          {
            id: 1,
            name: 'red',
            price: 0,
          },
          {
            id: 2,
            name: 'blue',
            price: 0,
          },
        ],
      },
      {
        id: 2,
        name: 'size',
        subOptions: [
          {
            id: 3,
            name: 'Ring No.13',
            price: 1000,
          },
          {
            id: 4,
            name: 'Ring No.14',
            price: 1000,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    costPrice: 10000,
    price: 9000,
    discountRate: 10,
    name: '엄청난 주얼리',
    category: 'Office Core',
    description1:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    description2:
      '<div>Look: Office Core<br>Item : Ring<br>Material : Silver 925, 14K, while gold plating CZ (while)</div>',
    quantity: 10,
    status: 'ACTIVE',
    options: [
      {
        id: 1,
        name: 'color',
        subOptions: [
          {
            id: 1,
            name: 'red',
            price: 0,
          },
          {
            id: 2,
            name: 'blue',
            price: 0,
          },
        ],
      },
      {
        id: 2,
        name: 'size',
        subOptions: [
          {
            id: 3,
            name: 'Ring No.13',
            price: 1000,
          },
          {
            id: 4,
            name: 'Ring No.14',
            price: 1000,
          },
        ],
      },
    ],
  },
];

const fancyImagesData: FancyImagesType[] = [
  {
    uuid: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 1,
  },
  {
    uuid: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 2,
  },
  {
    uuid: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 3,
  },
  {
    uuid: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 4,
  },
  {
    uuid: 1,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 5,
  },
  {
    uuid: 2,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 1,
  },
  {
    uuid: 2,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 2,
  },
  {
    uuid: 2,
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    order: 3,
  },
];

export const useFancyHandler = [
  //fancy option list조회 api
  http.get('/fancy/options', () => {
    const tempArr: FancyCategory[] = fashionData.map(
      ({ id, image, categoryName }) => {
        return { id, image, categoryName };
      }
    );
    return HttpResponse.json(tempArr);
  }),

  //fancy list infinite scroll
  http.get('/fancy', ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get('page'));
    const pageSize = Number(url.searchParams.get('pageSize'));
    const totalCount = fashionData.length;
    const totalPages = Math.round(totalCount / pageSize);

    const tempObj = {
      contents: fashionData.slice(page * pageSize, (page + 1) * pageSize),
      pageNumber: page,
      pageSize: pageSize,
      totalPages,
      totalCount,
      isLastPage: totalPages <= page,
      isFirstPage: page === 0,
    };
    if (page > pageSize) {
      return HttpResponse.json(null, {
        status: 400,
        statusText: '페이지 수가 전체 페이지수를 넘어감',
      });
    }
    return HttpResponse.json(tempObj);
  }),

  //fancy unit api
  http.get('/fancy/:id', ({ params }) => {
    const tempArr = FancyUnitData.find(data => data.id === Number(params.id));
    if (!tempArr) {
      return HttpResponse.json(null, {
        status: 404,
        statusText: '해당 id는 존재하지 않습니다.',
      });
    }
    return HttpResponse.json(tempArr);
  }),

  http.get('/fancy/images', ({ request }) => {
    try {
      const url = new URL(request.url);
      const id = url.searchParams.get('id');

      if (id === null || isNaN(Number(id))) {
        return HttpResponse.json(
          { error: 'Invalid ID' },
          {
            status: 400,
            statusText: 'Bad Request',
          }
        );
      }

      const tempArr = fancyImagesData.filter(data => data.uuid === Number(id));
      if (tempArr.length === 0) {
        return HttpResponse.json(
          { error: 'Image not found' },
          {
            status: 404,
            statusText: 'Not Found',
          }
        );
      }

      return HttpResponse.json(tempArr, {
        status: 200,
        statusText: 'OK',
      });
    } catch (error) {
      console.error('Error in MSW handler:', error);
      return HttpResponse.json(
        { error: 'Internal Server Error' },
        {
          status: 500,
          statusText: 'Internal Server Error',
        }
      );
    }
  }),
];
