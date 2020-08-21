import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const state = {
        user,
    }
    const actions = {

    }
    return (
        <AuthContext.Provider value={{...state, ...actions}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
