import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const useAuth = () => {
    const AuthInfo = use(AuthContext)
    return (
        AuthInfo
    );
};

export default useAuth;