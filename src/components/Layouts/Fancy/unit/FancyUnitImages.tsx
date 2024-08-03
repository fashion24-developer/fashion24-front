import { FancyImagesType } from '@/types/fancy';
import Image from 'next/image';
import { useState } from 'react';

const FancyUnitImages = ({ images }: { images: FancyImagesType[] }) => {
  console.log(images);

  return (
    <div>
      {images.map(item => {
        return (
          <div>
            <Image src={item.image} width={50} height={50} alt="상세이미지" />
            <div>{item.order}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FancyUnitImages;
