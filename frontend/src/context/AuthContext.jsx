import React, {createContext, useState, useEffect} from 'react';

import SOCKET_ROUTES from 'constants/socketRoutes';
import STORAGE_KEYS from 'constants/storageKeys';

import BackensSocket from 'controllers/BackensSocket';

import useRequestState from 'hooks/useRequestState';

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState(null);

    const {registerRequestState, registerActions} = useRequestState('register');

    useEffect(() => {
        //TODO: get url from env instead of hard coded
        BackensSocket.connect('http://localhost:3001');
        const token = localStorage.getItem(STORAGE_KEYS.token);
        if (!token) return setLoaded(true);
        login();
    }, [])

    const login = async () => {
        const {error, response} = await BackensSocket.emitAuth(SOCKET_ROUTES.auth.login, {});
        if (error) {
            localStorage.removeItem(STORAGE_KEYS.token);
            setLoaded(true);
            return;
        }
        const {user} = response;
        setUser(user);
        setLoaded(true);
    }

    const logout = async () => {
        await BackensSocket.emit(SOCKET_ROUTES.auth.logout, {})
        setUser(null);
        localStorage.removeItem(STORAGE_KEYS.token);
    }

    const register = async name => {
        registerActions.processing();
        const {error, response} = await BackensSocket.emit(SOCKET_ROUTES.auth.register, {name});
        if (error) return registerActions.error(error);
        registerActions.result(response);
        const {user, token} = response;
        localStorage.setItem(STORAGE_KEYS.token, token);
        setUser(user);
    }

    const state = {
        user,
        ...registerRequestState
    }
    const actions = {
        register,
        logout
    }
    return (
        <AuthContext.Provider value={{...state, ...actions}}>
            {loaded && children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
