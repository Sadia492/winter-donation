import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const authContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updatedData) => {
    updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    createUser,
    setUser,
    updateUser,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
