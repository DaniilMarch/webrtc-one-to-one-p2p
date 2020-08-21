import React, {Fragment} from 'react';

import Room from 'components/Room/Room';
import Header from 'components/common/Header/Header';
import Page from 'components/common/Page/Page';
import Footer from 'components/common/Footer/Footer';

const RoomPage = () => {
    return (
        <Fragment>
            <Header/>
            <Page>
                <Room/>
            </Page>
            <Footer/>
        </Fragment>
    )
}

export default RoomPage;
