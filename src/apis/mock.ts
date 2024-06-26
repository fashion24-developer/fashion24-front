import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const MOCK = {
  path: '/api',

  //모킹데이터 get api
  async testApi(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MOCK.path}/ex`);
    return result.data;
  },
};

export default MOCK;
