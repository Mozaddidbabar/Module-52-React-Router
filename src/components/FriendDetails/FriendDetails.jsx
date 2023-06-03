import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams();
    // const history = useHistory();
    const [friend, setFriend] = useState([]);
    const url = '/friends';
    const handleClick = () =>{
        // history.push('/friends');
    }
    
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div className='text-center d-flex justify-content-center'>
            {/* <h2>THe id: {id}</h2> */}
            {/* <button onClick={handleClick} className='text-decoration-none bg-warning text-dark p-2 rounded'>Back to Friends</button> */}

            <div className='border border-2 border-gray p-5 rounded'>
            <h2>Name: {friend.name}</h2>
            <h3>Username: {friend.username} </h3>
            <p>Email: {friend.email} </p>
            <p>Website: {friend?.website} </p>
            <p>Company Name: {friend.company?.name} </p>
            <p>Company Details: {friend.company?.catchPhrase} </p>
            <Link to={url} className='text-decoration-none bg-primary text-dark p-2 rounded'>Back to Friends</Link>
            </div>
        </div>
    );
};

export default FriendDetails;