import React from 'react';
import './Friend.css';

const enterFriend = event => {
    event.stopPropagation();
    console.log('enter:', event.target);
    event.target.classList.add('active');
};
const leaveFriend = event => {
    event.stopPropagation();
    console.log('leave:', event.relatedTarget);
    event.target.classList.remove('active');
};

const Friend = props => {
    return (
        <div
            className="friend"
            draggable
            onMouseOver={event => enterFriend(event)}
            onMouseLeave={event => leaveFriend(event)}
        >
            <p className="rank">{props.friend.id}</p>
            <h2 className="name">{props.friend.name}</h2>
            <p className="age">Age: {props.friend.age}</p>
            <a className="email" href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
            <div className="friend-buttons">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
        </div>
    )
}

// PROP TYPES!

export default Friend;