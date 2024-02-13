import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : 'hide'}`} onClick={closeModal}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <p>This is your modal content.</p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <ul className="ContainerNavbar">
                <li>
                    <h1 className="Title-NavBar">ToDo</h1> 
                </li>
                <li>  
                    <button className="Button-NavBar" onClick={openModal}>Create New Task</button>
                    {showModal && <Modal showModal={showModal} closeModal={closeModal} />}
                </li>
                <li>
                    <button>Change theme</button>
                </li>
            </ul>
    </div>
  );
};

export default Header;
