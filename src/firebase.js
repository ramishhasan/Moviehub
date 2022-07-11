import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAENJS4lctDeYV9BXyMEvdMjR0lvhgzk0M",
  authDomain: "movieapp-631e2.firebaseapp.com",
  projectId: "movieapp-631e2",
  storageBucket: "movieapp-631e2.appspot.com",
  messagingSenderId: "440175067384",
  appId: "1:440175067384:web:e4fca1844adb3a28d0bb0d",
  measurementId: "G-RGBJ4CY365"
};

const app = initializeApp(firebaseConfig);
export default app