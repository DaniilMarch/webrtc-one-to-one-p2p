import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {AuthContext} from 'context/AuthContext';

import LoginPage from 'pages/LoginPage';
import RoomPage from 'pages/RoomPage';
import RoomSelectPage from 'pages/RoomSelect';
import NotFoundPage from 'pages/NotFountPage';

import ROUTES from 'components/Router/Routes';

const Router = () => (
    <BrowserRouter>
        <Switch>
            {routeFactory(ROUTES.login, LoginPage)}
            {routeFactory(ROUTES.room, RoomPage)}
            {routeFactory(ROUTES.roomSelect, RoomSelectPage)}
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)


const routeFactory = (route, page) => (
    <Route
        exact
        path={route.path}
        component={withAccessCheck(page, route)}
    />
)

const withAccessCheck = (Component, route) => props => {
    const {user} = useContext(AuthContext);
    const isAllowed = !route.access || route.access(user);

    if (!isAllowed) return <Redirect to={route.fallback(user)}/>;

    return <Component {...props}/>
}

export default Router;
