'use client';

import { useRouter } from 'next/navigation';

//해당 부분은 나중에 미들웨어를 통해 깜빡임 없이 이동
export default function AdminPage() {
  const router = useRouter();
  router.replace('/admin/products');
  return <>어드민 페이지</>;
}
