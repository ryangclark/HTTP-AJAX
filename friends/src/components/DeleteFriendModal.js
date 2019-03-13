import React, { useState } from 'react';

import AriaModal from 'react-aria-modal';
import axios from 'axios';

import './Modal.css';

const DeleteFriendModal = props => {
    const [modalActive, setModalActive] = useState(false);

    const getApplicationNode = () => document.querySelector('.App');

    const handleFriendDelete = () => {
        axios
            .delete(`http://localhost:5000/friends/${props.friend.id}`)
            // .then(response => console.log(response))
            .then(() => setModalActive(false))
            .catch(error => console.log(error));
    }

    const modal = modalActive
        ?   <AriaModal
                initialFocus="#cancel"
                getApplicationNode={() => getApplicationNode()}
                onExit={() => setModalActive(false)}
                titleText="Delete Friend?"
                underlayStyle={{ paddingTop: '2rem' }}
                verticallyCenter
            >
                <div className="friend-modal">
                    <header>
                        <h3>Delete Friend?</h3>
                    </header>
                    <p>Delete {props.friend.name} as a friend?<br></br><br></br>This action can be undone by simply refreshing the page because we don't know how to persist data on the backend quite yet.</p>
                    <footer className="modal-footer">
                        <button
                            onClick={() => handleFriendDelete()}
                            type="button"
                        >
                            Delete
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
                onClick={event => {
                    event.target.parentElement.parentElement.classList.remove('active');
                    setModalActive(true)}
                }
                type="button"
            >
                Delete
            </button>
            {modal}
        </React.Fragment>
    )
}

export default DeleteFriendModal;