import axios from 'axios';
import { getAuthError, getAuthToken } from './utils/getAuthInterceptor';

const mockInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MOCK_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const mockAuthInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_MOCK_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

//로그인이 필요없는 인스턴스
const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    'Cache-Control': 'no-cache', //캐시설정에 관한 헤더
    'Content-Type': 'application/json', //"multipart/form-data": 파일 업로드 형식
    'Access-Control-Allow-Origin': '*',
    withCredentials: true,
  },
  timeout: 3000,
});

//로그인이 필요한 인스턴스
const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json', //"multipart/form-data": 파일 업로드 형식
    'Access-Control-Allow-Origin': '*',
    withCredentials: true,
  },
  timeout: 3000,
});

//then 또는 catch로 인터셉터를 동작시킬 수 있음
// 요청 인터셉터 추가하기
authInstance.interceptors.request.use(getAuthToken, getAuthError);
mockAuthInstance.interceptors.request.use(getAuthToken, getAuthError);

export { instance, authInstance, mockInstance, mockAuthInstance };
