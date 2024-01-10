import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

function StartFirebase() {
  

  const firebaseConfig = {
    apiKey: "AIzaSyC1DH0msCXenpNz2daBS7d96dUXXTcm75U",
    authDomain: "monitorearthquake-9ce4c.firebaseapp.com",
    databaseURL: "https://monitorearthquake-9ce4c-default-rtdb.firebaseio.com",
    projectId: "monitorearthquake-9ce4c",
    storageBucket: "monitorearthquake-9ce4c.appspot.com",
    messagingSenderId: "1025876232195",
    appId: "1:1025876232195:web:30d389d4a335d98a212636",
    measurementId: "G-528BZNKHK5"
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);

}

const firebaseConfig = {
  apiKey: "AIzaSyC1DH0msCXenpNz2daBS7d96dUXXTcm75U",
  authDomain: "monitorearthquake-9ce4c.firebaseapp.com",
  databaseURL: "https://monitorearthquake-9ce4c-default-rtdb.firebaseio.com",
  projectId: "monitorearthquake-9ce4c",
  storageBucket: "monitorearthquake-9ce4c.appspot.com",
  messagingSenderId: "1025876232195",
  appId: "1:1025876232195:web:30d389d4a335d98a212636",
  measurementId: "G-528BZNKHK5"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default StartFirebase;

