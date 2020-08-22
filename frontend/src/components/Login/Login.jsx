import React, {useState, useContext} from 'react';

import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';

import {AuthContext} from 'context/AuthContext';

import style from './Login.module.scss';

const Login = () => {
    const {registerError, registerProcessing, register} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!name) return setError('Please enter name');
        setError('');
        register(name);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.title}>Enter name</div>
            <div className={style.form}>
                <Input
                    onChange={setName}
                    name='name'
                    value={name}
                    classes={{wrapper: style.inputWrapper}}
                    error={error || registerError}
                />
                <Button
                    text='Submit'
                    onClick={handleSubmit}
                    primary
                    processing={registerProcessing}
                />
            </div>
        </div>
    )
}

export default Login;
