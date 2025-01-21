"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type PasswordContextType = {
  isAuthorized: boolean;
  auth: (password: string) => boolean;
};

const AuthContext = createContext<PasswordContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthorized");
    if (storedAuth === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const auth = (password: string) => {
    const correctPassword = "op123en";
    if (password === correctPassword) {
      setIsAuthorized(true);
      localStorage.setItem("isAuthorized", "true");
      return true;
    } else {
      setIsAuthorized(false);
      localStorage.removeItem("isAuthorized");
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
