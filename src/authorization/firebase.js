import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNusFYZ3aOA87v6Reg0-AhQowuUspkb0E',
  authDomain: 'blog-db-4630a.firebaseapp.com',
  databaseURL: 'https://blog-db-4630a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blog-db-4630a',
  storageBucket: 'blog-db-4630a.appspot.com',
  messagingSenderId: '178176137569',
  appId: '1:178176137569:web:98f296c4beb6d63c704d20',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .setPersistence(auth.Auth.Persistence.SESSION)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithGithub = () => {
  signInWithPopup(auth, provider)
    .setPersistence(auth.Auth.Persistence.SESSION)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
