import React, { useContext, useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    const login = (username) => {
        localStorage.setItem('user', JSON.stringify({ username }));
        setCurrentUser({ username });
    };

    const logout = () => {
        localStorage.removeItem('user');
        setCurrentUser(null);
    };

    const value = { currentUser, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
