import getPresetProviderAuth from './utils/getProviderAuth';
import * as styles from './login.css';

const ProviderSelect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {getPresetProviderAuth('kakao')}
        {getPresetProviderAuth('naver')}
        {getPresetProviderAuth('google')}
      </div>
    </div>
  );
};

export default ProviderSelect;
