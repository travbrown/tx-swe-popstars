import firebase from 'firebase'; 
 
const firebaseConfig = {
  apiKey: "AIzaSyBC-mDXhxigV5NiXRkwOVhZOyxjvuAwcWA",
  authDomain: "popstars-76cdd.firebaseapp.com",
  databaseURL: "https://popstars-76cdd.firebaseio.com",
  projectId: "popstars-76cdd",
  storageBucket: "popstars-76cdd.appspot.com",
  messagingSenderId: "826536627753",
  appId: "1:826536627753:web:a4b9eace9f134d4f019638",
  measurementId: "G-7ES8P675LN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
