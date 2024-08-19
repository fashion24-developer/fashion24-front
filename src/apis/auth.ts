import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { generateRandomString } from '@/utils/generateRandomString';

const AUTH = {
  path: '/api/auth',

  async authLogin(code: string, provider: string): Promise<AxiosResponse> {
    const state = generateRandomString(10);
    const result: AxiosResponse = await instance.post(
      `${AUTH.path}/${provider}/login`,
      {
        state: state,
      },
      {
        params: {
          code: code,
        },
      }
    );
    return result.data;
  },
};

export default AUTH;
