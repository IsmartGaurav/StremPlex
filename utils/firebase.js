// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1CWfMYvUhZOqRAVRNU8AdCSlbz7gwffg",
  authDomain: "streamplex-app.firebaseapp.com",
  projectId: "streamplex-app",
  storageBucket: "streamplex-app.appspot.com",
  messagingSenderId: "204869792224",
  appId: "1:204869792224:web:b57a97411054121e15fb85",
  measurementId: "G-D8LH0GGJE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);