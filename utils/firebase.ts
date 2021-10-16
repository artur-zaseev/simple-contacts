import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithRedirect, signOut, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_ENV_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_ENV_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_ENV_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_ENV_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_ENV_MESSAGING_SENDERID,
    appId: process.env.NEXT_PUBLIC_ENV_APP_ID,
});

const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
};

const db = getFirestore(app);
const auth = getAuth(app);

export const firebaseHelpers = {
    auth,
    providers,
    db,
};
