import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  /*
    TODO: SETUP Facebook login,
    */
  // create new user
  const CreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // register user from backend code
  const CreateUserFromBackend = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        formData
      );
      setLoading(false);
      console.log(response);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw new Error("Error creating user using backend");
    }
  };

  // sign in with existing account
  const signInExisting = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // reset password
  const resetPasswordWithEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Updated username and photo");
      })
      .catch((error) => console.log(error));
  };
  // update email address
  const updateUserEmail = (newEmail) => {
    return updateEmail(auth.currentUser, newEmail);
  };
  // update password
  const updateUserPassword = (newPassword) => {
    return updatePassword(user, newPassword);
  };
  // send a password reset email
  const requestPassReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // observer state to observe user state changing
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInformation = {
    CreateNewUser,
    signInExisting,
    user,
    loading,
    updateUserProfile,
    signInWithGoogle,
    resetPasswordWithEmail,
    logOut,
    updateUserEmail,
    updateUserPassword,
    requestPassReset,
    CreateUserFromBackend,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
