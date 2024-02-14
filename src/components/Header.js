import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : 'hide'}`} onClick={closeModal}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <form>
            <fieldset>
              <legend>Creating Task</legend>
              <div>
                <input type="text" id="taskName" name='name' placeholder='Task Name' required/>
              </div>
              <label for="taskName">Due Date</label>
              <div>
                <input type='date' id="taskDate" name='taskDate' placeholder='Task Date' ></input>
              </div>
              <div>
                <input type="radio" id="primary" name='toDO' value="primary" required/> 
                <label for="primary">Urgent</label>
              </div>
              <div>
                <input type="radio" id="second" name='toDO' value="second"/> 
                <label for="second">Important</label>
              </div>
              <div>
                <input type="radio" id="Third" name='toDO' value="third"/> 
                <label for="Third">Do Later</label>
              </div>
              <button type='submit' value='submit'>Create Task</button>
            </fieldset>
          </form>
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
                    <button onClick={undefined}>Change theme</button>
                </li>
            </ul>
    </div>
  );
};

export default Header;
