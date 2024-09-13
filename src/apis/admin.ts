import { AxiosResponse } from 'axios';
import { authInstance } from './axiosInstance';
import { AdminAddParamsType } from '@/types/admin';

const ADMIN = {
  path: '/api/admin',
  async fancyAddItemApi(data: AdminAddParamsType): Promise<any> {
    const result: AxiosResponse = await authInstance.post(
      `${ADMIN.path}/fancy`,
      data
    );
  },
};
