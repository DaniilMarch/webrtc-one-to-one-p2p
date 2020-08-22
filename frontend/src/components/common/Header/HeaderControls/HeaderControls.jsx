import React, {useContext} from 'react';

import {AuthContext} from 'context/AuthContext';
import Button from 'components/common/Button/Button';

const HeaderControls = () => {
    const {logout, user} = useContext(AuthContext);

    const actions = [
        {
            isAvailable: user => !!user,
            buttonProps: {
                text: 'Log out',
                key: 'logout',
                danger: true,
                onClick: logout,
            },
        }
    ];
    return (
        <div>
            {actions.map(action => {
                if (!action.isAvailable(user)) return null;
                return <Button {...action.buttonProps}/>
            })}
        </div>
    )
}

export default HeaderControls;
