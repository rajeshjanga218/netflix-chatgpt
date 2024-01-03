import { getAuth } from "firebase/auth";
import {firebase} from "../config/config"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: firebase.APIKEY,
  authDomain: firebase.AUTH_DOMAIN,
  projectId: firebase.PROJECT_ID,
  storageBucket: firebase.STORAGE_BUCKET,
  messagingSenderId: firebase.MESSAGING_SENDER_ID,
  appId: firebase.APP_ID,
  measurementId: firebase.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()