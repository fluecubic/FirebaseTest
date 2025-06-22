import { initializeApp } from "firebase/app";
import { getDoc, addDoc, doc, getFirestore, getDocs, getDocFromCache, DocumentSnapshot, collection  } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD5bua7viD8GGLKJH2Vt_uYoN2zmjb4DBg",
  authDomain: "textchange-91bb5.firebaseapp.com",
  projectId: "textchange-91bb5",
  storageBucket: "textchange-91bb5.firebasestorage.app",
  messagingSenderId: "287967549015",
  appId: "1:287967549015:web:983d315ece9f8c56f87512",
  measurementId: "G-40FLEQSHH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

document.getElementById("go").addEventListener("click", () => {
  alert("send");
  const docRef = addDoc(collection(db, "User"), {
    Text:document.getElementById("input").value
  })
})