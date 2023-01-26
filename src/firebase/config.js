import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWbfwxHuZsn2QZzNpvQjfHs1MCNmkgxJ8",
  authDomain: "miniblog-2d6f1.firebaseapp.com",
  projectId: "miniblog-2d6f1",
  storageBucket: "miniblog-2d6f1.appspot.com",
  messagingSenderId: "564506763241",
  appId: "1:564506763241:web:fd51a41758a6a6a4c43578"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
