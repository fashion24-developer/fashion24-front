import { AxiosResponse } from 'axios';
import { instance } from './axiosInstance';
import { generateRandomString } from '@/utils/generateRandomString';
import { AuthType } from '@/types/auth';

const AUTH = {
  path: '/api/auth',

  async authLogin(code: string, provider: string): Promise<AuthType> {
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
  async refreshAuth(): Promise<{ accessToken: string }> {
    const result: AxiosResponse = await instance.get(
      `${AUTH.path}/new-access-token`
    );
    return result.data;
  },
};

export default AUTH;
