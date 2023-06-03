import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center text-decoration-none'>
                <Link to='/'>Home</Link>
                <Link to='/friends'>Friends</Link>
        </div>
    );
};

export default Header;