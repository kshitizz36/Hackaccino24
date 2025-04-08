import { initializeApp, getDatabase, ref } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyB_0KMxFTCsqY05NaQGqvPfB460tIAIsiE",
    authDomain: "hackaccino24.firebaseapp.com",
    databaseURL: "https://hackaccino24-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hackaccino24",
    storageBucket: "hackaccino24.appspot.com",
    appId: "1:708074645866:web:ddbafe33a21f9f45445d13"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Removed redundant function call. firebase.database() is now deprecated.
const dbRef = ref(db);