import { InternalAxiosRequestConfig } from 'axios';
import { getAuthErrorHandler } from './getErrorHandler';
import { redirect } from 'next/navigation';

export function getAuthToken(config: InternalAxiosRequestConfig<any>) {
  const accessToken = localStorage.getItem('accessToken');

  //나중에 모달로 바꾸기
  if (!accessToken && confirm('로그인이 필요합니다.\n로그인 하시겠습니까?')) {
    redirect('/login');
  }
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
}

export function getAuthError(error: any) {
  getAuthErrorHandler(error.response.data.message);
  return Promise.reject(error);
}
