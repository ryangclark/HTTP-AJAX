import React, { useState } from 'react';

import AriaModal from 'react-aria-modal';
import axios from 'axios';

import FriendForm from './FriendForm';

const AddFriendModal = () => {
    const [modalActive, setModalActive] = useState(false);

    const getApplicationNode = () => document.querySelector('.App');
    
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
            ).then(() => setModalActive(false))
            .catch(error => console.log(error));
    };

    const modal = modalActive
        ?   <AriaModal
                initialFocus="#modal-focus"
                getApplicationNode={() => getApplicationNode()}
                onExit={() => setModalActive(false)}
                titleText="Add Friend"
                underlayStyle={{ paddingTop: '2rem' }}
                verticallyCenter
            >
                <div className="friend-modal">
                    <header>
                        <h3>Add Friend</h3>
                    </header>
                    <FriendForm
                        handleFriendSubmit={handleFriendSubmit}
                        purpose={'add-friend'}
                    />
                    <footer className="modal-footer">
                        <button
                            form="add-friend"
                            type="submit"
                            value="Add Friend">
                            Add
                        </button>
                        <button
                            id="cancel"
                            onClick={() => setModalActive(false)}
                            type="button"
                        >
                            Cancel
                        </button>
                    </footer>
                </div>
            </AriaModal>
        : false;
    return (
        <React.Fragment>
            <button
                onClick={() => setModalActive(true)}
                type="button"
            >
                Add Friend
            </button>
            {modal}
        </React.Fragment>
    )
}

export default AddFriendModal;