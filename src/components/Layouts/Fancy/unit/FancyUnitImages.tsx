'use client';

import { FancyUnitImagesType } from '@/types/fancy';
import Image from 'next/image';
import { useState } from 'react';
import * as global from '@/styles/global.css';
import * as util from '@/styles/utils/globalStyleUtils';
import * as style from '@/components/Layouts/Fancy/fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const FancyUnitImages = ({
  images,
}: {
  images: FancyUnitImagesType['images'];
}) => {
  const [preview, setPreview] = useState({
    image: images[0].url,
    order: 1,
  });
  const imagePreviewHandler = (order: number) => {
    const choiceOrder = images.find(item => {
      return item.order === order;
    });
    setPreview(() => {
      return {
        image: choiceOrder?.url as string,
        order: order,
      };
    });
  };

  return (
    <div
      className={style.fancyUnitImagesContainer}
      style={util.createGlobalDisplay({ displayVar: 'flex' })}
    >
      <div className={style.imagesListItemContainer}>
        {images.map(item => {
          return (
            <div>
              <Image
                className={style.previewListImage}
                style={assignInlineVars({
                  [style.opacityVar]:
                    preview.order === item.order ? '1' : '0.5',
                })}
                onClick={() => imagePreviewHandler(item.order)}
                src={item.url}
                width={50}
                height={50}
                alt="상세이미지"
              />
            </div>
          );
        })}
      </div>
      <div className={global.imageWrapper}>
        <Image src={preview.image} fill alt="preview" />
      </div>
    </div>
  );
};

export default FancyUnitImages;
