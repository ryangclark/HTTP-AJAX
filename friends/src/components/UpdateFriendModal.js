import React, { useState } from 'react';

import AriaModal from 'react-aria-modal';

import FriendForm from './FriendForm';

const UpdateFriendModal = props => {
    const [modalActive, setModalActive] = useState(false);

    const getApplicationNode = () => document.querySelector('.App');

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
                    <FriendForm friend={props.friend} />
                    <footer className="modal-footer">
                        <button type="button">Save</button>
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
            <button onClick={() => setModalActive(true)} type="button">
                Update
            </button>
            {modal}
        </React.Fragment>
    )
}

export default UpdateFriendModal;