import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYUDJvPl_wEoIhCYanzqk3crlkydNpXQY",
  authDomain: "dashboard-app-3e955.firebaseapp.com",
  projectId: "dashboard-app-3e955",
  storageBucket: "dashboard-app-3e955.appspot.com",
  messagingSenderId: "129813209003",
  appId: "1:129813209003:web:692978d1ee269b2e31fcee",
  measurementId: "G-KVKJV0YVVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

export { auth, provider };
