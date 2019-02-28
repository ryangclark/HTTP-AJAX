import React, { useState } from 'react';

import AriaModal from 'react-aria-modal';
import axios from 'axios';

import FriendForm from './FriendForm';

import './Modal.css';

const AddFriendModal = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalEntered, setModalEntered] = useState(false);

    const deactivateModal = () => {
        setModalEntered(false);
        setTimeout(() => setModalActive(false), 300);
    };

    const getApplicationNode = () => document.querySelector('.App');
    
    const handleFriendAdd = event => {
        event.preventDefault();
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

    // transition things
    let modalContentClass = 'friend-modal modal--animated';
    let underlayClass = 'underlay';
    if (modalEntered) {
        modalContentClass += ' has-entered';
        underlayClass += ' has-entered';
    };

    const modal = modalActive
        ?   <AriaModal
                initialFocus="#name-field"
                getApplicationNode={() => getApplicationNode()}
                onEnter={() => setModalEntered(true)}
                onExit={() => deactivateModal()}
                titleText="Add Friend"
                underlayClass={underlayClass}
                underlayStyle={{ paddingTop: '2rem' }}
                verticallyCenter
            >
                <div className={modalContentClass}>
                    <header>
                        <h3>Add Friend</h3>
                    </header>
                    <FriendForm
                        handleFormSubmit={handleFriendAdd}
                        friend={{
                            name: '',
                            age: 0,
                            email: ''
                        }}
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
                            onClick={() => deactivateModal()}
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