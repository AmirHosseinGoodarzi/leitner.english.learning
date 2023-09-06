"use client";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/libs/firebase";

export const AuthContext = createContext<{
  googleSignIn: () => void;
  logOut: () => void;
  user: any;
  userLoading: boolean;
}>({ googleSignIn: () => {}, logOut: () => {}, user: {}, userLoading: true });

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>({});
  const [userLoading, setUserLoading] = useState<boolean>(true);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
      // console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
