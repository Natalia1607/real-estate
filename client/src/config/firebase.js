import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWCrtCupEITyjIDN6psw1OW9tzXd0FRTA",
  authDomain: "dillantum-realestate-356f3.firebaseapp.com",
  projectId: "dillantum-realestate-356f3",
  storageBucket: "dillantum-realestate-356f3.appspot.com",
  messagingSenderId: "793555992554",
  appId: "1:793555992554:web:b92dca52e88e1e427f7c93"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 