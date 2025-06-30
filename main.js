import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";  
import { getDoc, addDoc, doc, getFirestore, getDocs, getDocFromCache, DocumentSnapshot, collection, documentId, updateDoc, Timestamp, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";//init befehle


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

const docRef = doc(db, "User", "i87v72qq46Vdl9nhlumf"); //daten Formular
let inputz
document.getElementById("go").addEventListener("click", () => {
  
inputz = document.getElementById("output").value + 
  document.getElementById("input").value;
  // Dokument aktualisieren
 const rewritedoc =  updateDoc(docRef, {
  Text: inputz, Date: Timestamp.now()
});
})



onSnapshot(docRef, async ()=> {
  const docSnap = await getDoc(docRef); //Befehl um Daten zu lesen
  document.getElementById("output").value = docSnap.data().Text;//Variablen mit den daten
})
  
  


document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
   const rewritedoc =  updateDoc(docRef, {
  Text: document.getElementById("input").value, Date: Timestamp.now()
});
  }
});




//const AdddocRef = addDoc(collection(db, "User"), {//dokumenr adden schreiben
//    Text:document.getElementById("input").value
//  })


  

