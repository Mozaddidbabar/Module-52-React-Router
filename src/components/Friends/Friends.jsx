import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';
import Header from '../Header/Header';

const Friends = () => {
    const [friends, setFriends] = useState([]);
  
    const url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => setFriends(data))
    }, [])
    console.log(friends);
    let freindDiv = friends.map(friend=><h1>hello</h1>)


    return (
      < >
          <Header></Header>
          <h2 className='text-primary'>Frinends: {friends.length}</h2>
          <br />
            <div className='friends-container'>
            {
              friends.map(friend=><Friend 
                friend={friend}
              ></Friend>)
            }
            </div>
        </>
    );
};

export default Friends;