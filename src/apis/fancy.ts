import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import {
  FancyCategory,
  FancyListType,
  FancyPaginationParams,
  FancyPaginationType,
} from '@/types/fancy';

const FANCY = {
  path: '/fancy',

  //fancy페이지 옵션 리스트 불러오는 api
  async fancyOptionsListApi(): Promise<FancyCategory[]> {
    const result: AxiosResponse = await instance.get(`${FANCY.path}/options`);
    return result.data;
  },

  async fancyListPagination({
    page,
    pageSize,
  }: FancyPaginationParams): Promise<FancyPaginationType> {
    const result: AxiosResponse = await instance.get(`${FANCY.path}`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    return result.data;
  },

  async fancyUnitItemApi(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${FANCY.path}/${id}`);
    return result.data;
  },
};

export default FANCY;
