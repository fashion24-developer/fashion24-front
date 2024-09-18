import * as styles from './adminUserList.css';

export default function AdminUsersList() {
  return (
    <>
      <ul className={styles.title}>
        <li>번호</li>
        <li>이름</li>
        <li>아이디</li>
        <li></li>
      </ul>
      <div className={styles.content}>리스트 content</div>
    </>
  );
}
