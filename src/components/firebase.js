import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiNpZUdM5zQH0bNxxcfYj-s1xOXIU6O6Q",
    authDomain: "neurobluetooth.firebaseapp.com",
    projectId: "neurobluetooth",
    storageBucket: "neurobluetooth.appspot.com",
    messagingSenderId: "978924725887",
    appId: "1:978924725887:web:20a43e2b5a6109a813814a",
    measurementId: "G-TBTSVP4GY3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
