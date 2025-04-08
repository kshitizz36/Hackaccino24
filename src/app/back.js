import { initializeApp } from 'firebase/app'; import { getDatabase, ref, set, get, child } from 'firebase/database'; 
import * as admin from 'firebase-admin'; 
admin.initializeApp({
	messagingSenderId: '708074645866',
	apiKey: 'AIzaSyB_0KMxFTCsqY05NaQGqvPfB460tIAIsiE',
	databaseURL: 'https://hackaccino24-default-rtdb.asia-southeast1.firebasedatabase.app'
}); 
const db = admin.database();

async function getdata(lvl) {
	try {
		const snapshot = await admin.database().ref(`/`).get();
		return snapshot.val();
	} catch (error) {
		console.error(error);
	}
}
export default getdata;