import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Footer from './Footer';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 
  'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
  'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/myprofile');
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="full-height"> 
          <div className="form-container">
            <form className='mb-3' onSubmit={handleSubmit}>
              <label htmlFor='name'>Name</label>
              <input className="form-control mb-3" type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select" name="state" value={formData.state} onChange={handleChange}>
                    <option defaultValue>Choose...</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" name="zip" value={formData.zip} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
