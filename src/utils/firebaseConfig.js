import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebase } from '../config/config';

const firebaseConfig = {
  apiKey: firebase.APIKEY,
  authDomain: firebase.AUTH_DOMAIN,
  projectId: firebase.PROJECT_ID,
  storageBucket: firebase.STORAGE_BUCKET,
  messagingSenderId: firebase.MESSAGING_SENDER_ID,
  appId: firebase.APP_ID,
  measurementId: firebase.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export default auth;
