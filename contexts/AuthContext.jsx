import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, providers } from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth, (data) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [auth]);

    const loginWithGoogle = () => auth.signInWithRedirect(providers.google);

    const logout = () => auth.signOut();

    const value = {
        currentUser,
        loginWithGoogle,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
