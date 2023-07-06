import { GoogleLogin } from '@react-oauth/google';
import styles from './SocialLogin.module.css';

export default function GoogleLoginButton() {
  return (
    <div className={styles.googlebtn_area}>
      <GoogleLogin
        onSuccess={(res) => {
          console.log(res);
        }}
        onFailure={(err) => {
          console.log(err);
        }}
      />
    </div>
  );
}
