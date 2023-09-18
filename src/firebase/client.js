import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOPTyclkbAnv4H29qd7QcsMs5J2XBOjhs",
    authDomain: "bookstore-55735.firebaseapp.com",
    databaseURL: "https://bookstore-55735-default-rtdb.firebaseio.com",
    projectId: "bookstore-55735",
    storageBucket: "bookstore-55735.appspot.com",
    messagingSenderId: "996294149499",
    appId: "1:996294149499:web:b229176861955f8427e9de"
};

const app = initializeApp (firebaseConfig);
export const db = getFirestore(app);