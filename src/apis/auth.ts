import { AxiosResponse } from 'axios';
import { authInstance } from './axiosInstance';
import { generateRandomString } from '@/utils/generateRandomString';
import { AuthType } from '@/types/auth';

const AUTH = {
  path: '/api/auth',

  async authLogin(code: string, provider: string): Promise<AuthType> {
    const state = generateRandomString(10);
    const result: AxiosResponse = await authInstance.post(
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
