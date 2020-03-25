import firebase from 'firebase'; 
 
const firebaseConfig = {
    apiKey: "AIzaSyCvKX8bYRMxuN6hNtcmlakAqPF_vVMbv7k",
    authDomain: "popstars.firebaseapp.com",
    databaseURL: "https://popstars.firebaseio.com",
    projectId: "popstars",
    storageBucket: "popstars.appspot.com",
    messagingSenderId: "228302208581",
    appId: "1:228302208581:web:fc91c851f88a230319ed2c",
    measurementId: "G-QV0XR06Y4L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);