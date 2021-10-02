import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../config/firebase.config";

const auth = getAuth(app);

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCred = await signInWithPopup(auth, provider);
      return { user: userCred.user };
    } catch (error) {
      console.error(error);
    }
  },
  loginWithEmailPassword: async ({ email, password }) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCred.user };
    } catch (error) {
      console.error(error);
    }
  },
  signUpWithEmailPassword: async ({ email, password }) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { user: userCred.user };
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    await signOut(auth);
  },
};
