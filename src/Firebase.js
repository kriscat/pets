// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnEWYKVm7Z9qZjUEVc2baRN4o6GkGlz4I",
    authDomain: "pets2you-19d9c.firebaseapp.com",
    projectId: "pets2you-19d9c",
    storageBucket: "pets2you-19d9c.appspot.com",
    messagingSenderId: "662008825894",
    appId: "1:662008825894:web:123de96088e12089bbfee7",
    databaseURL: "https://pets2you-19d9c-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: 'gs://pets2you-19d9c.appspot.com/',
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);