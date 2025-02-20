/* eslint-disable react/prop-types */
import  { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, onAuthStateChanged,  signInWithPopup, signOut, updateProfile } from "firebase/auth";

//import useAxiosPublic from '../hooks/useAxiosPublic';
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState({})
      // const axiosPublic=useAxiosPublic()
      const [loading, setLoading] = useState(true)
      const googleProvider = new GoogleAuthProvider()
      

      const signInWithGoogle = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
          }

     

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  if (currentUser) {
                      // get token and store client
                  //     const userInfo = { email: currentUser.email };
                  //     axiosPublic.post('/jwt', userInfo)
                  //         .then(res => {
                  //             if (res.data.token) {
                  //                 localStorage.setItem('access-token', res.data.token);
                  //                 setLoading(false);
                  //             }
                  //         })
                  setLoading(false);
                  }
                  else {
                      // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                     // localStorage.removeItem('access-token');
                      setLoading(false);
                  }

            })
            return () => {
                 return unSubscribe()
            }
      }, [])

      const signout = () => {

            setUser(null)
            setLoading(false)
            return signOut(auth)

      }
      
      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photo,
            })
          }

      const authinfo = {
           
             user,
             signout,
           updateUserProfile,
            loading,
            setUser,
            signInWithGoogle


      }
      return (
            <AuthContext.Provider value={authinfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;