import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArPB6D-GzhU-icaUvNb_CLqvJyLUl4ZhU",
  authDomain: "wirelessbuzzer-74a7f.firebaseapp.com",
  databaseURL: "https://wirelessbuzzer-74a7f-default-rtdb.firebaseio.com",
  projectId: "wirelessbuzzer-74a7f",
  storageBucket: "wirelessbuzzer-74a7f.appspot.com",
  messagingSenderId: "682558340515",
  appId: "1:682558340515:web:ba2d863e83322334e7ae16",
  measurementId: "G-BXDHQW24MZ"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()