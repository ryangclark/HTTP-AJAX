import React from 'react';
import './Friend.css';

const Friend = props => {
    return (
        <div className="friend">
            <h2 className="name">{props.friend.name}</h2>
            <p className="age">Age: {props.friend.age}</p>
            <a className="email" href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
        </div>
    )
}

// PROP TYPES!

export default Friend;