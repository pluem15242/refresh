import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAB__swKLNbncyXGzIi3S3gWN5ZvjE3Azo",
        authDomain: "templet-c6900.firebaseapp.com",
        databaseURL: "https://templet-c6900.firebaseio.com",
        projectId: "templet-c6900",
        storageBucket: "templet-c6900.appspot.com",
        messagingSenderId: "617525553891",
        appId: "1:617525553891:web:3d5c9013e337b8ffc1f3d6",
        measurementId: "G-65BBWSVCGR"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()