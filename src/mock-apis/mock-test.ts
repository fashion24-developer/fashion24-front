import { http, HttpResponse } from 'msw';
const ExData = [
  {
    id: 1,
    name: '이재진',
    introduct: '모애6기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
  {
    id: 2,
    name: '이자이진',
    introduct: '모애7기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
  {
    id: 3,
    name: '이제진',
    introduct: '모애8기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
  {
    id: 4,
    name: '이줴진',
    introduct: '모애6.5기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
  {
    id: 5,
    name: '이족진',
    introduct: '모애9기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
  {
    id: 6,
    name: '이주직',
    introduct: '모애10기 회장입니다~',
    mainField: 'nextjs, front-end',
  },
];

export const useExHandler = [
  //ex조회 api
  http.get('/api/ex', () => {
    return HttpResponse.json(ExData);
  }),
  //ex-unit조회 api
  http.get('api/ex-unit:id', ({ request }) => {
    const url = new URL(request.url);

    // Given "/products?id=1&id=2&id=3",
    // "productIds" will equal ["1", "2", "3"].
    const productId = Number(url.searchParams.getAll('id'));
    const foundData = ExData.find((data) => data.id === productId);
    if (!productId) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(foundData);
  }),
];
