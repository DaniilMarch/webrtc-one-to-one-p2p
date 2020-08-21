import React from 'react';

import style from './Page.module.scss';

const Page = ({children}) => {

    return (
        <div className={style.page}>
            {children}
        </div>
    )
}

export default Page;
