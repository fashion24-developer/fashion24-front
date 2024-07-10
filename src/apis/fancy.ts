import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { FancyCategory } from '@/types/fancy';

const FANCY = {
  path: '/fancy',

  //fancy페이지 옵션 리스트 불러오는 api
  async fancyOptionsListApi(): Promise<FancyCategory[]> {
    const result: AxiosResponse = await instance.get(`${FANCY.path}/options`);
    return result.data;
  },
};

export default FANCY;
