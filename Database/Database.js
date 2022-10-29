// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA56Y1BF8xhH9Il5uUtvNnZXNRaiGy2NZE",
  authDomain: "pickcodemo1.firebaseapp.com",
  projectId: "pickcodemo1",
  storageBucket: "pickcodemo1.appspot.com",
  messagingSenderId: "377422977467",
  appId: "1:377422977467:web:8a05940e7a4d5d87838c9e",
  measurementId: "G-07MQVXN1KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
  async function getstudents(db) {
  const students = collection(db, 'students');
  const studentsSnapshot = await getDocs(students);
  const studentsList = studentsSnapshot.docs.map(doc => doc.data());
  return studentsList;
}
const students = await getstudents(db)
console.log(students)
