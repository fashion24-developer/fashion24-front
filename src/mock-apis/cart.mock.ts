import { http, HttpResponse } from 'msw';
import { FancyUnitData } from './fancy.mock';
import { CartItemType } from '@/types/cart';
type cartItemParamsType = {};
type cartItemRequestBodyType = {
  fancyId: number;
  options: {
    name: string;
    selectSubOption: string;
  };
  count: number;
};

const cartItemList: CartItemType[] = [
  {
    fancyId: 1,
    id: 1,
    name: 'Item 1',
    category: 'Category 1',
    options: [
      { id: 1, name: 'Option 1', selectSubName: 'SubOption 1' },
      { id: 2, name: 'Option 2', selectSubName: 'SubOption 2' },
    ],
    count: 1,
    costPrice: 1000,
    price: 1200,
    discountRate: 10,
    image: 'image1.jpg',
  },
  {
    fancyId: 2,
    id: 2,
    name: 'Item 2',
    category: 'Category 2',
    options: [
      { id: 3, name: 'Option 3', selectSubName: 'SubOption 3' },
      { id: 4, name: 'Option 4', selectSubName: 'SubOption 4' },
    ],
    count: 2,
    costPrice: 2000,
    price: 2200,
    discountRate: 5,
    image: 'image2.jpg',
  },
  {
    fancyId: 3,
    id: 3,
    name: 'Item 3',
    category: 'Category 3',
    options: [
      { id: 5, name: 'Option 5', selectSubName: 'SubOption 5' },
      { id: 6, name: 'Option 6', selectSubName: 'SubOption 6' },
    ],
    count: 3,
    costPrice: 3000,
    price: 3300,
    discountRate: 15,
    image: 'image3.jpg',
  },
  {
    fancyId: 4,
    id: 4,
    name: 'Item 4',
    category: 'Category 4',
    options: [
      { id: 7, name: 'Option 7', selectSubName: 'SubOption 7' },
      { id: 8, name: 'Option 8', selectSubName: 'SubOption 8' },
    ],
    count: 4,
    costPrice: 4000,
    price: 4400,
    discountRate: 20,
    image: 'image4.jpg',
  },
  {
    fancyId: 5,
    id: 5,
    name: 'Item 5',
    category: 'Category 5',
    options: [
      { id: 9, name: 'Option 9', selectSubName: 'SubOption 9' },
      { id: 10, name: 'Option 10', selectSubName: 'SubOption 10' },
    ],
    count: 5,
    costPrice: 5000,
    price: 5500,
    discountRate: 25,
    image: 'image5.jpg',
  },
  {
    fancyId: 6,
    id: 6,
    name: 'Item 6',
    category: 'Category 6',
    options: [
      { id: 11, name: 'Option 11', selectSubName: 'SubOption 11' },
      { id: 12, name: 'Option 12', selectSubName: 'SubOption 12' },
    ],
    count: 6,
    costPrice: 6000,
    price: 6600,
    discountRate: 30,
    image: 'image6.jpg',
  },
  {
    fancyId: 7,
    id: 7,
    name: 'Item 7',
    category: 'Category 7',
    options: [
      { id: 13, name: 'Option 13', selectSubName: 'SubOption 13' },
      { id: 14, name: 'Option 14', selectSubName: 'SubOption 14' },
    ],
    count: 7,
    costPrice: 7000,
    price: 7700,
    discountRate: 35,
    image: 'image7.jpg',
  },
  {
    fancyId: 8,
    id: 8,
    name: 'Item 8',
    category: 'Category 8',
    options: [
      { id: 15, name: 'Option 15', selectSubName: 'SubOption 15' },
      { id: 16, name: 'Option 16', selectSubName: 'SubOption 16' },
    ],
    count: 8,
    costPrice: 8000,
    price: 8800,
    discountRate: 40,
    image: 'image8.jpg',
  },
  {
    fancyId: 9,
    id: 9,
    name: 'Item 9',
    category: 'Category 9',
    options: [
      { id: 17, name: 'Option 17', selectSubName: 'SubOption 17' },
      { id: 18, name: 'Option 18', selectSubName: 'SubOption 18' },
    ],
    count: 9,
    costPrice: 9000,
    price: 9900,
    discountRate: 45,
    image: 'image9.jpg',
  },
  {
    fancyId: 10,
    id: 10,
    name: 'Item 10',
    category: 'Category 10',
    options: [
      { id: 19, name: 'Option 19', selectSubName: 'SubOption 19' },
      { id: 20, name: 'Option 20', selectSubName: 'SubOption 20' },
    ],
    count: 10,
    costPrice: 10000,
    price: 11000,
    discountRate: 50,
    image: 'image10.jpg',
  },
];

const cartMockHandler = [
  http.post<cartItemParamsType, cartItemRequestBodyType>(
    '/api/cart',
    async ({ request }) => {
      const cartItem = await request.json();

      if (!cartItem) {
        return new HttpResponse(null, {
          status: 403,
          statusText: 'item data not found',
        });
      }

      return HttpResponse.json(cartItem, {
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
];

export default cartMockHandler;
