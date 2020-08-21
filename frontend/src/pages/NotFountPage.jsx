import React, {Fragment} from 'react';

import NotFound from 'components/NotFound/NotFound';
import Header from 'components/common/Header/Header';
import Page from 'components/common/Page/Page';
import Footer from 'components/common/Footer/Footer';

const NotFoundPage = () => {

    return (
        <Fragment>
            <Header/>
            <Page>
                <NotFound/>
            </Page>
            <Footer/>
        </Fragment>
    )
}

export default NotFoundPage;
