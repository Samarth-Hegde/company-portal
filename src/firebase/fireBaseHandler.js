import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx1Kdk8LFVRL1sL7srYYxGzGSvM20hdE4",
  authDomain: "job-portal-73440.firebaseapp.com",
  databaseURL:
    "https://job-portal-73440-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "job-portal-73440",
  storageBucket: "job-portal-73440.appspot.com",
  messagingSenderId: "788735845845",
  appId: "1:788735845845:web:83b7bc19741d9396c0895c",
};

const app = initializeApp(firebaseConfig);
export const fireBaseDataBase = getDatabase(app);
export const fireBaseAuthentication = getAuth(app);
