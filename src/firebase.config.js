import{getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCufM8k2HHdgjpRSjYcCcLzBKrnxpB6Bgo",
    authDomain: "restaurantapp-1ef29.firebaseapp.com",
    databaseURL: "https://restaurantapp-1ef29-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-1ef29",
    storageBucket: "restaurantapp-1ef29.appspot.com",
    messagingSenderId: "16171358099",
    appId: "1:16171358099:web:242c0dd35a0a061f127a66",
    measurementId: "G-QH6TWPTSHD"
  };
  
  const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage}; 