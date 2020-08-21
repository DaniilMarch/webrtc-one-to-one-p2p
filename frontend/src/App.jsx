import React from 'react';
import ReactDOM from 'react-dom';

import AuthContextProvider from 'context/AuthContext';

import Router from 'components/Router/Router';

const App = () => {
    const contextProviders = [
        AuthContextProvider,
    ]

    return (
        <div>{renderWithContextProviders(contextProviders, <Router/>)}</div>
    )
}

const renderWithContextProviders = (providers, children) => {
    if (providers.length === 0) return children;
    const Provider = providers[0];
    return (
        <Provider>
            {renderWithContextProviders(providers.slice(1), children)}
        </Provider>
    )
}

export default App;
