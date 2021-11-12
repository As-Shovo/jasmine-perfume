import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const intializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default intializeFirebase;