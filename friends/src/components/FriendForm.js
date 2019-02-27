import React from 'react';

const FriendForm = () => {
    return (
        <React.Fragment>
            <form className="friend-form">
                <label>
                    Name:<br></br>
                    <input type="text" name="name" />
                </label>
                <label>
                    Age:<br></br>
                    <input type="number" name="age" />
                </label>
                <label>
                    Email:<br></br>
                    <input type="email" name="email" />
                </label>
                <input type="submit" value="Add Friend" />
            </form>
        </React.Fragment>
    )
}

export default FriendForm;