import { Suspense } from 'react';
import OptionModal from '../_components/OptionModal';

export default function CartOptionModalPage() {
  return (
    <>
      <Suspense>
        <OptionModal />
      </Suspense>
    </>
  );
}
