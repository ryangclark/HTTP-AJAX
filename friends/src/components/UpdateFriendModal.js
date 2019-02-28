import React, { useState } from 'react';

import AriaModal from 'react-aria-modal';
import axios from 'axios';

import FriendForm from './FriendForm';

import './Modal.css';

const UpdateFriendModal = props => {
    const [modalActive, setModalActive] = useState(false);

    const getApplicationNode = () => document.querySelector('.App');

    const handleFriendUpdate = event => {
        event.preventDefault();
        const updateFriend = {
            name: event.target[0].value,
            age: event.target[1].value,
            email: event.target[2].value
        }
        axios
            .put(
                `http://localhost:5000/friends/${props.friend.id}`,
                updateFriend
            ).then(() => setModalActive(false))
            .catch(error => console.log(error));
    };

    const modal = modalActive
        ?   <AriaModal
                initialFocus="#cancel"
                getApplicationNode={() => getApplicationNode()}
                onExit={() => setModalActive(false)}
                titleText="Update Friend"
                underlayStyle={{ paddingTop: '2rem' }}
                verticallyCenter
            >
                <div className="friend-modal">
                    <header>
                        <h3>Update Friend</h3>
                    </header>
                    <FriendForm
                        friend={props.friend}
                        handleFormSubmit={handleFriendUpdate}
                        purpose={'update-friend'}
                    />
                    <footer className="modal-footer">
                        <button
                            form="update-friend"
                            type="submit"
                            value="Update Friend"
                        >
                            Update
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
                Update
            </button>
            {modal}
        </React.Fragment>
    )
}

export default UpdateFriendModal;