import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthService } from "../services/AuthService";

// initial state
const intialState = {
  user: null,
  error: null,
  login: () => {},
  loginWithGoogle: () => {},
  signup: () => {},
  logout: () => {},
};

// create context
const AuthContext = createContext(intialState);

// context provider
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  // router
  const router = useRouter();

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error);
  };

  const login = async ({ email, password }) => {
    const { error, user } = await AuthService.loginWithEmailPassword({
      email,
      password,
    });
    setUser(user ?? null);
    setError(error);
  };

  const signup = async ({ email, password }) => {};

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, loginWithGoogle, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, Provider };
