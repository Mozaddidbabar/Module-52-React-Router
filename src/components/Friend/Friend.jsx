import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props);
    const {name,  website, phone, username, email, id } = props.friend;

    const styleFriend = {
        borderRadius : '10px',
        border : '1px solid red',
        padding: '5px'
    }

    const url = `/friends/${id}`;
    return (
        <div className='border border-red p-3 rounded'>
            <h2>Name: {name}</h2>
            <h5>Username: {username}</h5>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <Link to={url} className='text-decoration-none bg-info text-dark p-2 rounded'>See more details</Link>
        </div>
    );
};

export default Friend;