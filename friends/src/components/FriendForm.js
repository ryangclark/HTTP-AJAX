import React from 'react';

import './Modal.css';

const FriendForm = props => {
    return (
        <React.Fragment>
            <form 
                className="friend-form"
                id={props.purpose}
                onSubmit={event => props.handleFormSubmit(event)}
            >
                <label>
                    Name:<br></br>
                    <input
                        id="name-field"
                        name="name"
                        required
                        type="text"
                        defaultValue={
                            props.purpose === 'update-friend'
                            ? props.friend.name
                            : ''
                        }
                    />
                </label>
                <label>
                    Age:<br></br>
                    <input
                        min="1"
                        max="110"
                        name="age"
                        required
                        type="number"
                        defaultValue={
                            props.purpose === 'update-friend'
                            ? props.friend.age
                            : ''
                        }
                    />
                </label>
                <label>
                    Email:<br></br>
                    <input
                        name="email"
                        required
                        type="email"
                        defaultValue={
                            props.purpose === 'update-friend'
                            ? props.friend.email
                            : ''
                        }
                    />
                </label>
                {/* <input type="submit" value="Add Friend" /> */}
            </form>
        </React.Fragment>
    )
};

export default FriendForm;