'use client';

import {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import * as styles from './productAddForm.css';
import FANCY from '@/apis/fancy';
import { usePathname } from 'next/navigation';
import { FancyUnitType } from '@/types/fancy';

interface ProductAddFormProps {
  existence: boolean;
}

interface ExistenceItemType {
  name: string;
  cost: number;
  discountRate: number;
  description1: string;
  description2: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export default function ProductAddForm({ existence }: ProductAddFormProps) {
  const [status, setStatus] = useState('ACTIVE');
  const [existenceItem, setExistenceItem] = useState<ExistenceItemType>({
    name: '',
    cost: 0,
    discountRate: 0,
    description1: '',
    description2: '',
    status: 'INACTIVE',
  });
  const path = usePathname();
  const onSelectHandler: ChangeEventHandler<HTMLSelectElement> = e => {
    setStatus(e.target.value);
  };

  //quill editor 사용해서 구현 예정
  const getFancyUnitItem = async () => {
    const response = await FANCY.fancyUnitItemApi(
      Number(path[path.length - 1])
    );
    setExistenceItem(() => {
      return {
        name: response.name,
        cost: response.costPrice,
        discountRate: response.discountRate,
        description1: response.description1,
        description2: response.description2,
        status: response.status,
      };
    });
  };

  //other input
  const onChangeTextBox = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    fileName: keyof ExistenceItemType
  ) => {
    setExistenceItem(prev => {
      return {
        ...prev,
        [fileName]: e.target.value,
      };
    });
  };

  //description
  const onChangeAreaBox = (
    e: FormEvent<HTMLDivElement>,
    fileName: keyof ExistenceItemType
  ) => {
    setExistenceItem(prev => {
      return {
        ...prev,
        [fileName]: e.currentTarget.innerHTML,
      };
    });
  };

  const onSubmitForm = () => {};

  useEffect(() => {
    if (existence) {
      getFancyUnitItem();
    }
  }, [path]);

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <div>상품명</div>
        <div>
          <input
            onChange={e => onChangeTextBox(e, 'name')}
            style={{ padding: 5 }}
            type="text"
            placeholder="상품명"
            value={existenceItem.name}
          />
        </div>
        <div>가격</div>
        <div>
          <input
            onChange={e => onChangeTextBox(e, 'cost')}
            style={{ padding: 5 }}
            type="text"
            placeholder="가격"
            value={existenceItem.cost}
          />
        </div>
        <div>할인율</div>
        <div>
          <input
            onChange={e => onChangeTextBox(e, 'discountRate')}
            style={{ padding: 5 }}
            type="text"
            placeholder="할인율"
            value={existenceItem.discountRate}
          />
        </div>
        <div>상품설명1</div>
        <div
          onChange={e => onChangeAreaBox(e, 'description1')}
          className={styles.description}
          contentEditable
          dangerouslySetInnerHTML={{ __html: existenceItem.description1 }}
        ></div>
        <div>상품설명2</div>
        <div
          className={styles.description}
          contentEditable
          dangerouslySetInnerHTML={{ __html: existenceItem.description2 }}
        ></div>
        <div>판매 상태</div>
        <div>
          <select value={existenceItem.status} onChange={onSelectHandler}>
            <option value="ACTIVE">판매중</option>
            <option value="INACTIVE">판매중지</option>
          </select>
        </div>
      </form>
      <div className={styles.submitButtonContainer}>
        <button className={styles.submitButton} onClick={onSubmitForm}>
          등록하기
        </button>
      </div>
    </div>
  );
}
