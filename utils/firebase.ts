import { initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import * as firestore from 'firebase/firestore';

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_ENV_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_ENV_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_ENV_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_ENV_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_ENV_MESSAGING_SENDERID,
    appId: process.env.NEXT_PUBLIC_ENV_APP_ID,
});

const auth = firebaseAuth.getAuth(app);
const db = firestore.getFirestore(app);
const googleProvider = new firebaseAuth.GoogleAuthProvider();

export function signInWithRedirect() {
    return firebaseAuth.signInWithRedirect(auth, googleProvider);
}

export function onAuthStateChanged(callback: (user: firebaseAuth.User | null) => void) {
    return firebaseAuth.onAuthStateChanged(auth, callback);
}

export function signOut() {
    return firebaseAuth.signOut(auth);
}

export function setDoc(path: string, pathSegments: string[], data: any) {
    return firestore.setDoc(firestore.doc(firestore.collection(db, path), ...pathSegments), data);
}

export function getDoc(path: string, pathSegments: string[]) {
    return firestore.getDoc(firestore.doc(db, path, ...pathSegments));
}
