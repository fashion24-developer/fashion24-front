'use client';

import Image from 'next/image';
import * as styles from './notFound.css';
import notFoundIcon from '/public/images/not_found_icon.svg';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <main className={styles.background}>
      <div className={styles.paper}>
        <Image
          src={notFoundIcon}
          alt={'타이틀'}
          width={450}
          height={300}
          priority={true}
        ></Image>
      </div>
      <Image
        src={'/images/not_found_404error.svg'}
        alt={'에러 메세지'}
        width={700}
        height={170}
        style={{ marginTop: '175px' }}
      />
      <Image
        src={'/images/not_found_pagenotfound.svg'}
        alt={'에러 메세지'}
        width={500}
        height={150}
      />
      <button className={styles.backBtn} onClick={router.back}>
        ← Go Back
      </button>
    </main>
  );
}
