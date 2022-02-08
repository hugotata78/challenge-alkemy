import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../components/Login'
import { MyRecords } from '../components/MyRecords'

export const Home = () => {

    const session = useSelector(state => state.userReducer.session)
    const id = session && session.user.id
    const token = session && session.token
    return (
        <div>
            {!session && <Login />}
            {session && <MyRecords id={id} token={token} />}
        </div>
    )
};
