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
import * as style from '@/components/Layouts/Fancy/fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface FancyUnitImagesProps {
  images: FancyUnitImagesType['images'];
  options: FancyUnitBodyType['options'];
}

const FancyUnitImages = ({ images, options }: FancyUnitImagesProps) => {
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

  //color option을 보여주는 함수
  const printColorOptions = () => {
    if (selectedColors) {
      return (
        <>
          {selectedColors.map(color => {
            return (
              <div
                key={color.id}
                style={assignInlineVars({ [style.colorOptionVar]: color.name })}
                className={style.colorOption}
              ></div>
            );
          })}
        </>
      );
    }
  };

  /**color배열을 받아오는 hook */
  useEffect(() => {
    const colorOption = options.find(option => option.name === 'color');
    setSelectedColors(colorOption?.subOptions);
  }, []);

  console.log(selectedColors);

  return (
    <div
      className={style.fancyUnitImagesContainer}
      style={util.createGlobalDisplay({ displayVar: 'flex' })}
    >
      <div className={style.imagesListItemContainer}>
        {printColorOptions()}
        <>
          {images.map((item, idx) => {
            return (
              <div key={idx}>
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
        </>
      </div>
      <div className={global.imageWrapper}>
        <Image src={preview.image} fill alt="preview" />
      </div>
    </div>
  );
};

export default FancyUnitImages;
