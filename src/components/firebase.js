import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ( {
    apiKey: "AIzaSyAyZW208KmmPDWgpkgBOguMusMZyQl2LlY",
    authDomain: "mytalk-b8956.firebaseapp.com",
    projectId: "mytalk-b8956",
    storageBucket: "mytalk-b8956.appspot.com",
    messagingSenderId: "91490185484",
    appId: "1:91490185484:web:ddd870233eeccb8d2d1929"
  }).auth();