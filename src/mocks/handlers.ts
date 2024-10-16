import { authHandler } from '@/mock-apis/auth.mock';
import cartMockHandler from '@/mock-apis/cart.mock';
import { useFancyHandler } from '@/mock-apis/fancy.mock';
import { useExHandler } from '@/mock-apis/mock-test';

export const handlers = [
  ...useExHandler,
  ...useFancyHandler,
  ...authHandler,
  ...cartMockHandler,
];
