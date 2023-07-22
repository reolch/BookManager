import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginInfo } from './Types';
import FirebaseAuthentication from './FirebaseAuthentication';

async function handleLogin(loginInfo: LoginInfo) {
  try {
    await signInWithEmailAndPassword(FirebaseAuthentication, loginInfo.userId, loginInfo.password);
    console.log('ログインに成功しました！');
  } catch (error) {
    console.error('ログインエラー:', error);
  }
}

export default handleLogin;
