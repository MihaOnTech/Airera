import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentSingleTabManager } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNzxvFtfaMqrVtKW2XSz3tW1gkOkO-Cp0",
  authDomain: "airera-b8a74.firebaseapp.com",
  projectId: "airera-b8a74",
  storageBucket: "airera-b8a74.appspot.com",
  messagingSenderId: "74049712210",
  appId: "1:74049712210:web:a2bda8aeb88b4c17762f8b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(), 
  })
});

export { auth, db };
