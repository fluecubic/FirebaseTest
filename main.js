import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";  
import { getDoc, addDoc, doc, getFirestore, getDocs, getDocFromCache, DocumentSnapshot, collection, documentId, updateDoc, Timestamp, onSnapshot, query, orderBy, serverTimestamp  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";//init befehle


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
let inputz;
let Namen = "";



document.getElementById("entername").onclick = function () {
  Namen = document.getElementById("name").value;
  document.getElementById("login").remove()
  Notification.requestPermission()
}

document.getElementById("go").addEventListener("click", async () => {
  
  // Dokument aktualisieren
 const AdddocRef = addDoc(collection(db, "User"), {//dokumenr adden schreiben
  Text:document.getElementById("input").value, Date: serverTimestamp(), User: Namen
})

document.getElementById("input").value = "";
});

const colRef = collection(db, "User");
const q = query(colRef, orderBy("Date", "asc")); 


async function getSortedDocuments() {
  
  const querySnapshot = await getDocs(q);
  document.getElementById("output").innerHTML = ""
  
  querySnapshot.forEach((doc) => {
    if (doc.data().User === Namen) { 
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "<p class='yourmessage'>" + doc.data().Text + "</p>";
    }
   else {
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "<p class='message'>" +doc.data().User + ": " + doc.data().Text + "</p>";
    }
  });
}

getSortedDocuments();

onSnapshot(q, (querySnapshot) => {
  getSortedDocuments();

  document.addEventListener("visibilitychange" , ()=> {
    if (document.visibilityState == "hidden") {
      
      new Notification("Neue Nachricht", {body: "Los Antworte!"});
    }
  })
})
  
  


document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
   
  }
});






  

