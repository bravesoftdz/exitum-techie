import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBCnPoH9gpbW22WznEpunwMoic7Ks0hqJA",
    authDomain: "exitum-18c15.firebaseapp.com",
    databaseURL: "https://exitum-18c15.firebaseio.com",
    projectId: "exitum-18c15",
    storageBucket: "",
    messagingSenderId: "22787386092",
    appId: "1:22787386092:web:ad41be8ef72577840513c9"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;