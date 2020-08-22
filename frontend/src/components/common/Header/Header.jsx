import React from 'react';

import AppTitle from 'components/common/Header/AppTitle/AppTitle';
import HeaderControls from 'components/common/Header/HeaderControls/HeaderControls';

import style from './Header.module.scss';

const Header = () => {

    return (
        <header>
            <AppTitle/>
            <HeaderControls/>
        </header>
    )
}

export default Header;
