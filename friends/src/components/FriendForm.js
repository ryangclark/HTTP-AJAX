import React from 'react';

import axios from 'axios';

const handleFriendSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    const newFriend = {
        name: event.target[0].value,
        age: event.target[1].value,
        email: event.target[2].value
    }
    axios
        .post(
            'http://localhost:5000/friends',
            newFriend
        )//.then(response => console.log(response))
        .catch(error => console.log(error));
};

const FriendForm = () => {
    return (
        <React.Fragment>
            <form 
                className="friend-form"
                onSubmit={event => handleFriendSubmit(event)}
            >
                <label>
                    Name:<br></br>
                    <input type="text" name="name" required />
                </label>
                <label>
                    Age:<br></br>
                    <input type="number" name="age" min="1" max="110" required />
                </label>
                <label>
                    Email:<br></br>
                    <input type="email" name="email" required />
                </label>
                <input type="submit" value="Add Friend" />
            </form>
        </React.Fragment>
    )
};

export default FriendForm;