import React, {Fragment} from 'react';

import RoomSelect from 'components/RoomSelect/RoomSelect';
import Header from 'components/common/Header/Header';
import Page from 'components/common/Page/Page';
import Footer from 'components/common/Footer/Footer';

const RoomSelectPage = () => {

    return (
        <Fragment>
            <Header/>
            <Page>
                <RoomSelect/>
            </Page>
            <Footer/>
        </Fragment>
    )
}

export default RoomSelectPage;
