import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA5C64zEZJ6H8Deup3bpaFAVScQCmcbI_M',
  authDomain: 'world-with-women.firebaseapp.com',
  databaseURL: 'https://world-with-women.firebaseio.com',
  projectId: 'world-with-women',
  storageBucket: 'world-with-women.appspot.com',
  messagingSenderId: '990891142525',
  appId: '1:990891142525:web:e69a2bfb2588fe1b46f014',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
