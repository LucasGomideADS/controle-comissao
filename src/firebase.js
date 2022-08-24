import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyA7q9xSai9d3TdhFIJtYIH_6Tuqcs1DlVc",
  authDomain: "banco-comissao-teste.firebaseapp.com",
  projectId: "banco-comissao-teste",
  storageBucket: "banco-comissao-teste.appspot.com",
  messagingSenderId: "70467140091",
  appId: "1:70467140091:web:f8ab09621deb6aac39335e"
});  

const db = firebaseApp.firestore()
export { db }