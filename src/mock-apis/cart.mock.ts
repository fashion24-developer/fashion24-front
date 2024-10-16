import { http, HttpResponse } from 'msw';
import { FancyUnitData } from './fancy.mock';
import { CartItemType } from '@/types/cart';
type cartItemParamsType = {};
type cartItemRequestBodyType = {
  fancyId: number;
  options: {
    optionId: number;
    subOptionId: number;
  }[];
  count: number;
};

const cartItemList = [
  {
    fancyId: 1,
    id: 1,
    name: 'Item 1',
    category: 'Category 1',
    options: [
      { id: 1, name: 'color', selectSubName: '#4a8fcb' },
      { id: 2, name: 'Option 2', selectSubName: 'SubOption 2' },
    ],
    count: 1,
    costPrice: 1000,
    price: 1200,
    discountRate: 10,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 2,
    id: 2,
    name: 'Item 2',
    category: 'Category 2',
    options: [
      { id: 3, name: 'color', selectSubName: '#d45774' },
      { id: 4, name: 'Option 4', selectSubName: 'SubOption 4' },
    ],
    count: 2,
    costPrice: 2000,
    price: 2200,
    discountRate: 5,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 3,
    id: 3,
    name: 'Item 3',
    category: 'Category 3',
    options: [
      { id: 5, name: 'color', selectSubName: '#8d3c9f' },
      { id: 6, name: 'Option 6', selectSubName: 'SubOption 6' },
    ],
    count: 3,
    costPrice: 3000,
    price: 3300,
    discountRate: 15,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 4,
    id: 4,
    name: 'Item 4',
    category: 'Category 4',
    options: [
      { id: 7, name: 'color', selectSubName: '#b87b3e' },
      { id: 8, name: 'Option 8', selectSubName: 'SubOption 8' },
    ],
    count: 4,
    costPrice: 4000,
    price: 4400,
    discountRate: 20,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 5,
    id: 5,
    name: 'Item 5',
    category: 'Category 5',
    options: [
      { id: 9, name: 'color', selectSubName: '#3e8f5a' },
      { id: 10, name: 'Option 10', selectSubName: 'SubOption 10' },
    ],
    count: 5,
    costPrice: 5000,
    price: 5500,
    discountRate: 25,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 6,
    id: 6,
    name: 'Item 6',
    category: 'Category 6',
    options: [
      { id: 11, name: 'color', selectSubName: '#e0b72f' },
      { id: 12, name: 'Option 12', selectSubName: 'SubOption 12' },
    ],
    count: 6,
    costPrice: 6000,
    price: 6600,
    discountRate: 30,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 7,
    id: 7,
    name: 'Item 7',
    category: 'Category 7',
    options: [
      { id: 13, name: 'color', selectSubName: '#6d9eb1' },
      { id: 14, name: 'Option 14', selectSubName: 'SubOption 14' },
    ],
    count: 7,
    costPrice: 7000,
    price: 7700,
    discountRate: 35,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 8,
    id: 8,
    name: 'Item 8',
    category: 'Category 8',
    options: [
      { id: 15, name: 'color', selectSubName: '#fa9b6f' },
      { id: 16, name: 'Option 16', selectSubName: 'SubOption 16' },
    ],
    count: 8,
    costPrice: 8000,
    price: 8800,
    discountRate: 40,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 9,
    id: 9,
    name: 'Item 9',
    category: 'Category 9',
    options: [
      { id: 17, name: 'color', selectSubName: '#d94c69' },
      { id: 18, name: 'Option 18', selectSubName: 'SubOption 18' },
    ],
    count: 9,
    costPrice: 9000,
    price: 9900,
    discountRate: 45,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
  {
    fancyId: 10,
    id: 10,
    name: 'Item 10',
    category: 'Category 10',
    options: [
      { id: 19, name: 'color', selectSubName: '#8a6d7d' },
      { id: 20, name: 'Option 20', selectSubName: 'SubOption 20' },
    ],
    count: 10,
    costPrice: 10000,
    price: 11000,
    discountRate: 50,
    image: 'https://cdn.pixabay.com/photo/2020/03/24/01/01/cat-4962437_640.jpg',
  },
];

const cartMockHandler = [
  http.post<cartItemParamsType, cartItemRequestBodyType>(
    '/api/cart',
    async ({ request }) => {
      const { count, fancyId, options } = await request.json();

      if (!options) {
        return new HttpResponse(null, {
          status: 403,
          statusText: 'item data not found',
        });
      }

      return HttpResponse.json('success', {
        status: 201,
      });
    }
  ),
  http.get('/api/cart/list', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return HttpResponse.json({
        status: 401,
      });
    }

    return HttpResponse.json(cartItemList, {
      status: 200,
    });
  }),

  http.delete('/api/cart/:itemId', async ({ params }) => {
    const itemId = Number(params.itemId);

    const filterItem = cartItemList.filter(item => {
      return item.id !== itemId;
    });

    if (!itemId) {
      return HttpResponse.json(null, {
        status: 403,
      });
    }

    return HttpResponse.json(filterItem, {
      status: 200,
    });
  }),
];

export default cartMockHandler;
