import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const CART = {
  path: '/api/cart',
  //fancy페이지 옵션 리스트 불러오는 api
  async cartListApi(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${CART.path}/list`);
    return result.data;
  },
};

export default CART;
