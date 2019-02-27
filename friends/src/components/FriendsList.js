import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Friend from './Friend';


const FriendsList = () => {
    const [Amigos, setAmigos] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/friends')
            .then(response => setAmigos(Object.values(response.data)))
            .catch(error => console.log(error));
    });

    return (
        <div className="friends-list">
            {Amigos.map(amigo => <Friend friend={amigo} />)}
        </div>
    );
}

export default FriendsList;