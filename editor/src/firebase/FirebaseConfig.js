
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvoAx-z0vR5MjWlnr6NGv2fCBMRXupsws",
  authDomain: "code-editor1.firebaseapp.com",
  projectId: "code-editor1",
  storageBucket: "code-editor1.appspot.com",
  messagingSenderId: "745321061599",
  appId: "1:745321061599:web:320c3052dfb4d00e7c1d6a",
  measurementId: "G-M72L8WKJEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}