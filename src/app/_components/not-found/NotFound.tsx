import Image from 'next/image';
import * as styles from './notFound.css';

export default function NotFound() {
  return (
    <main className={styles.background}>
      <div className={styles.paper}>
        <Image
          src={'/images/not_found_icon.svg'}
          alt={'타이틀'}
          width={450}
          height={250}
          priority={true}
        ></Image>
      </div>
      <div className={styles.message_404}>
        <Image
          src={'/images/not_found_404error.svg'}
          alt={'에러 메세지'}
          width={800}
          height={200}
        />
      </div>
      <div className={styles.message_404}>
        <Image
          src={'/images/not_found_pagenotfound.svg'}
          alt={'에러 메세지'}
          width={800}
          height={200}
        />
      </div>
    </main>
  );
}
