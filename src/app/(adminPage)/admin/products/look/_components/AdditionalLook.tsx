import * as styles from './additionalLook.css';
import Image from 'next/image';

export default function AdditionalLook() {
  return (
    <ul className={styles.addLookContainer}>
      <li>{1}</li>
      <li>
        <Image
          src="https://cdn.pixabay.com/photo/2018/08/28/14/12/cat-3637651_1280.jpg"
          alt="look카테고리"
          width={100}
          height={100}
        />
      </li>
      <li>엄청난 고양이</li>
    </ul>
  );
}
