import { initializeApp } from "firebase/app";//init
import { getDoc, addDoc, doc, getFirestore, getDocs, getDocFromCache, DocumentSnapshot, collection, documentId  } from "firebase/firestore"//init befehle


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
  const docRef = addDoc(collection(db, "User"), {//dokumenr adden schreiben
    Text:document.getElementById("input").value
  })
})

const docRef = doc(db, "User", "i87v72qq46Vdl9nhlumf"); //daten Formular
const docSnap = await getDoc(docRef); //Befehl um Daten zu lesen

   docSnap.data();//Variablen mit den daten

  

