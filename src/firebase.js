import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB5KX1ipZXZchl_j0XktHHMgmzjDNA7RPA",
    authDomain: "wazaa-ce3bc.firebaseapp.com",
    projectId: "wazaa-ce3bc",
    storageBucket: "wazaa-ce3bc.appspot.com",
    messagingSenderId: "797080398768",
    appId: "1:797080398768:web:6047db0d6a17d8f8204475",
    measurementId: "G-D7D00L77L7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;