import { Header } from '../../components/fragments';
import { FormLoginPage } from '../../components/fragments/forms';

import styles from './styles.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <Header />
      <div className={styles.formContainer}>
        <FormLoginPage />
      </div>
    </div>
  );
};
