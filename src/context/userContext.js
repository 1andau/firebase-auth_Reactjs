import { createContext, useContext, useState } from 'react';
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../authorization/firebase';
import { db } from '../authorization/firebase';

let aUID = '';

auth.onAuthStateChanged((user) => {
  if (user) {
    aUID = user.uid;
  }
});

export const UserContext = createContext({});
export const useUserContext = () => {
  return useContext(UserContext);
};

export function createUser(userId) {
  return db
    .collection('users')
    .doc(aUID)
    .set({
      userInfo: {
        id: `${auth.currentUser.uid}`,
        imageUrl: `${auth.currentUser.photoURL}`,
        name: `${auth.currentUser.displayName}`,
        email: `${auth.currentUser.email}`,
      },
    });
}

export function getAllUsers() {
  const tempDoc = [];
  return db
    .collection('users')
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        tempDoc.push(doc.id);
      });
      return tempDoc;
    });
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = () => {
    setLoading(true);
    setError('');

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithGithub = () => {
    setLoading(true);
    setError('');
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };
  const contextValue = {
    user,
    loading,
    logoutUser,
    signInWithGoogle,
    signInWithGithub,
  };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
