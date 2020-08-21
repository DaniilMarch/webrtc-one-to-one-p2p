import React, {Fragment} from 'react';

import Login from 'components/Login/Login';
import Page from 'components/common/Page/Page';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';

const LoginPage = () => {
    return (
        <Fragment>
            <Header/>
            <Page>
                <Login/>
            </Page>
            <Footer/>
        </Fragment>
    )
}

export default LoginPage;
