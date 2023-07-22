import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // 使用する認証機能をインポート

const firebaseConfig = {
  apiKey: 'AIzaSyDeyRfdck1FcQXVNpCnRsCVA-3W9T5l9eo',
  authDomain: 'book-manger-demo.firebaseapp.com',
  projectId: 'book-manger-demo',
  storageBucket: 'book-manger-demo.appspot.com',
  messagingSenderId: '353644906327',
  appId: '1:353644906327:web:1ecc5d542344b10aece012'
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);
const FirebaseAuthentication = getAuth(app);
export default FirebaseAuthentication;
