// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmNLfJJNNeZlRrgl6abFoz82ZL5gm2uEc",
  authDomain: "genri-web-app.firebaseapp.com",
  projectId: "genri-web-app",
  storageBucket: "genri-web-app.appspot.com",
  messagingSenderId: "157524003864",
  appId: "1:157524003864:web:9e6eb039f1b5cfb108c76d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;