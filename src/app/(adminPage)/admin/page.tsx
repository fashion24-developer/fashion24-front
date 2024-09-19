import { redirect } from 'next/navigation';

//해당 부분은 나중에 미들웨어를 통해 깜빡임 없이 이동
export default function AdminPage() {
  redirect('/admin/products/list');
}
