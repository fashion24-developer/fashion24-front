import Image from 'next/image';
import * as styles from './notFound.css';

export default function NotFound() {
  return (
    <div className={styles.background}>
      <header className={styles.titleDiv}>
        <Image
          src={''}
          alt={'타이틀'}
          fill
          sizes={'(max-width : 1980px) 100vw'}
          priority={true}
          style={{ objectFit: 'contain' }}
        ></Image>
      </header>
    </div>
  );
}
