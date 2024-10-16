import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const { LoginUserinfo } = useContext(AuthContext);

    return (
        <div className='text-center'>
            <p>Welcome Home {LoginUserinfo && LoginUserinfo.email ? LoginUserinfo.email : "Guest"}</p>
        </div>
    );
};

export default Home;
