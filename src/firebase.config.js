import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2CpLexBf7JVqwiMyFsOKyPB0x0PD7dsI",
  authDomain: "pustack-demo.firebaseapp.com",
  projectId: "pustack-demo",
  storageBucket: "pustack-demo.appspot.com",
  messagingSenderId: "671763442820",
  appId: "1:671763442820:web:fb83a119a877a81797a6d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getStorage(app);
