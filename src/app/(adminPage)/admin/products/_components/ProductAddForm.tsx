'use client';

import ModalWrapper from '@/app/_components/modalWrapper/ModalWrapper';
import Image from 'next/image';

interface ProductAddFormProps {
  data?: {
    id: string;
    name: string;
    price: number;
    discountRate: number;
    status: 'ACTIVE' | 'INACTIVE';
    look: string;
    options: string[];
    tags: string[];
  };
}

export default function ProductAddForm({ data }: ProductAddFormProps) {
  return (
    <>
      <ModalWrapper>
        <form>
          <div>상품이미지 등록위치</div>
        </form>
      </ModalWrapper>
    </>
  );
}
