"use client";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/libs/firebase";
import { usePathname, useRouter } from "next/navigation";
import ROUTES_OBJECT from "@/utils/RoutesObject";

export const AuthContext = createContext<{
  googleSignIn: () => void;
  logOut: () => void;
  user: any;
  userLoading: boolean;
}>({ googleSignIn: () => {}, logOut: () => {}, user: {}, userLoading: true });

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
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

  useEffect(() => {
    if (!userLoading && !user && pathname !== ROUTES_OBJECT.home) {
      router.push(ROUTES_OBJECT.home);
    }
  }, [pathname, user, userLoading]);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
