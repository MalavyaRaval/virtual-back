import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import Navbar from './Nav/Navbar';
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content-wrap">
          <div className="form-container">
            <h2>Login Page</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-12 mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
