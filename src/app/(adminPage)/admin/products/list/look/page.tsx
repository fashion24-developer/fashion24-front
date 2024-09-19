import { Suspense } from 'react';
import AdminProductListLookModal from '../_component/ProductListLookModal';

export default function AdminProductListLook() {
  return (
    <Suspense>
      <AdminProductListLookModal />
    </Suspense>
  );
}
