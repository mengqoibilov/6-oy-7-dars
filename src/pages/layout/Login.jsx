import React, { useState, memo } from 'react';
import './login.css';

const Login = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='btn' onClick={toggleModal}>Login</button>
      
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
              
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
});

export default Login;
