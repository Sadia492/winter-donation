import React, { createContext, useState } from "react";

export const authContext = createContext();
export default function AuthProvider({ children }) {
  const [name, setName] = useState("snigdha");

  const authInfo = {
    name,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
