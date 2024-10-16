import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const About = () => {
    const {LoginUserinfo} = useContext(AuthContext);

    return (
        <div className='text-center'>
            <p>Welcome to about page, {LoginUserinfo.email}</p>
        </div>
    );
};

export default About;