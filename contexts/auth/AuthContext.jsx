import React, { createContext, useContext, useEffect, useState } from 'react';

import { signInWithRedirect, signOut as firebaseSignOut, onAuthStateChanged } from '@/utils/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                setLoading(false);
            }
        });
    }, []);

    function signIn() {
        return signInWithRedirect();
    }

    function signOut() {
        setUser(undefined);
        return firebaseSignOut();
    }

    const value = { user, loading, signIn, signOut };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthContext, AuthProvider, useAuth };
