'use client';

import {
  FancyUnitBodyType,
  FancyUnitImagesType,
  OptionsType,
} from '@/types/fancy';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as global from '@/styles/global.css';
import * as util from '@/styles/utils/globalStyleUtils';
import * as styles from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import PrintColorOptions from './PrintColorOptions';

interface FancyUnitImagesProps {
  images: FancyUnitImagesType['images'];
  options: FancyUnitBodyType['options'];
  id: number;
}

const FancyUnitImages = ({ images, options, id }: FancyUnitImagesProps) => {
  const [preview, setPreview] = useState({
    image: images[0].url,
    order: 1,
  });
  const [selectedColors, setSelectedColors] =
    useState<OptionsType['subOptions']>();

  /**이미지 preview 띄우는 핸들러 */
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

  /**color배열을 받아오는 hook */
  useEffect(() => {
    const colorOption = options.find(option => option.name === 'color');
    setSelectedColors(colorOption?.subOptions);
  }, []);

  return (
    <div
      className={styles.fancyUnitImagesContainer}
      style={util.createGlobalDisplay({ displayVar: 'flex' })}
    >
      <div className={styles.imagesListItemContainer}>
        {selectedColors ? (
          <PrintColorOptions selectedColors={selectedColors} />
        ) : (
          <></>
        )}
        <>
          {images.map((item, idx) => {
            return (
              <div key={idx}>
                <Image
                  className={styles.previewListImage}
                  style={assignInlineVars({
                    [styles.opacityVar]:
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
        </>
      </div>
      <div className={global.imageWrapper}>
        <Image src={preview.image} fill alt="preview" />
      </div>
    </div>
  );
};

export default FancyUnitImages;
