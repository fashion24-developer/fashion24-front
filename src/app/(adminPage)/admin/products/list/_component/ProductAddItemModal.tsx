'use client';

import { FormEventHandler, useState } from 'react';
import * as styles from './productAddItemModal.css';
import ModalWrapper from '@/app/_components/modalWrapper/ModalWrapper';
import { AdminAddParamsType } from '@/types/admin';
import ADMIN from '@/apis/admin';
import { useRouter } from 'next/navigation';

export default function ProductAddItemModal() {
  const router = useRouter();
  const [postData, setPsoData] = useState<AdminAddParamsType>({
    name: '',
    costPrice: 0,
    discountRate: 0,
    description1: '',
    description2: '',
    status: 'INACTIVE',
  });
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    ADMIN.fancyAddItemApi(postData);
    router.back();
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPsoData(prev => {
      if (name === 'costPrice' || name === 'discountRate') {
        return {
          ...prev,
          [name]: Number(value),
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  return (
    <>
      <ModalWrapper>
        <div className={styles.layoutContainer}>
          <div className={styles.imageContainer}>
            이미지 위치
            <div>
              <label className={styles.formLabel} htmlFor="productImage">
                이미지 업로드
              </label>
              <input
                className={styles.formInputBox}
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                required
              />
            </div>
          </div>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="productName">
                상품명
              </label>
              <input
                onChange={onChangeHandler}
                className={styles.formInputBox}
                type="text"
                id="productName"
                name="name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="productPrice">
                가격
              </label>
              <input
                onChange={onChangeHandler}
                className={styles.formInputBox}
                type="number"
                id="productPrice"
                name="costPrice"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="productDiscount">
                할인율
              </label>
              <input
                onChange={onChangeHandler}
                className={styles.formInputBox}
                type="number"
                id="productDiscount"
                name="discountRate"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="productDescription1">
                상품 설명1
              </label>
              <textarea
                onChange={onChangeHandler}
                className={styles.formDescription}
                id="productDescription1"
                name="description1"
                required
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="productDescription2">
                상품 설명2
              </label>
              <textarea
                onChange={onChangeHandler}
                className={styles.formDescription}
                id="productDescription2"
                name="description2"
                required
              ></textarea>
            </div>
            <div className={styles.submitButtonContainer}>
              <button type="submit" className={styles.submitButton}>
                상품 등록
              </button>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </>
  );
}
