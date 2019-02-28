import React from 'react';

// const handleFriendSubmit = event => {
//     event.preventDefault();
//     console.log(event.target);
//     const newFriend = {
//         name: event.target[0].value,
//         age: event.target[1].value,
//         email: event.target[2].value
//     }
//     axios
//         .post(
//             'http://localhost:5000/friends',
//             newFriend
//         )//.then(response => console.log(response))
//         .catch(error => console.log(error));
// };

const FriendForm = props => {
    return (
        <React.Fragment>
            <form 
                className="friend-form"
                id={props.purpose}
                onSubmit={event => props.handleFriendSubmit(event)}
            >
                <label>
                    Name:<br></br>
                    <input type="text" name="name" required id="modal-focus" />
                </label>
                <label>
                    Age:<br></br>
                    <input type="number" name="age" min="1" max="110" required />
                </label>
                <label>
                    Email:<br></br>
                    <input type="email" name="email" required />
                </label>
                {/* <input type="submit" value="Add Friend" /> */}
            </form>
        </React.Fragment>
    )
};

export default FriendForm;