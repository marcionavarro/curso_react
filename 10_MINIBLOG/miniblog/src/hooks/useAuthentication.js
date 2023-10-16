import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIsIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // register
  const createUser = async (data) => {
    checkIsIsCancelled();
    setCancelled(true);
    setError(null);
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.name,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado!";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // logout - sign out
  const logout = () => {
    checkIsIsCancelled();
    signOut(auth);
  };

  // login - sign in
  const login = async (data) => {
    checkIsIsCancelled();
    setLoading(true)
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      let systemErrorMessage;

      if (error.message.includes("invalid-login-credentials")) {
        systemErrorMessage = "Dados não conferem";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};
