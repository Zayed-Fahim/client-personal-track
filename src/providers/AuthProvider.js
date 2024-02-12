import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    return await signInWithPopup(auth, googleProvider);
  };
  const handleGitHubLogin = async () => {
    return await signInWithPopup(auth, githubProvider);
  };
  const updateUser = async (userInfo) => {
    return await updateProfile(auth.currentUser, userInfo);
  };
  const logOut = async () => {
    return await signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    logOut,
    setUser,
    updateUser,
    handleGoogleLogin,
    handleGitHubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
