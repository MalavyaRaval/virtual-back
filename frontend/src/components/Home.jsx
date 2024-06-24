import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/navbar.css'; // Import the CSS file
import Footer from './Footer';
import defaultImage from '../images/symbol.jpg'; // Import the default image

const Home = () => {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    time: '',
    sponsor: '',
    coSponsor: '',
    security: '',
    food: '',
    custodian: '',
    description: '',
    image: null
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setEventDetails({
      ...eventDetails,
      image: e.target.files[0] // Set the selected image file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    if (eventDetails.date < currentDate) {
      setError('Event date cannot be in the past. Please select a future date.');
      return;
    }

    const conflictEvent = events.find(event => event.date === eventDetails.date && event.time === eventDetails.time);
    if (conflictEvent) {
      alert(`Event "${conflictEvent.name}" is already scheduled at this time. Please choose another time.`);
    } else {
      setEvents([...events, { ...eventDetails, isExpanded: false }]);
      setEventDetails({
        name: '',
        date: '',
        time: '',
        sponsor: '',
        coSponsor: '',
        security: '',
        food: '',
        custodian: '',
        description: '',
        image: null 
      });
      setError('');
      document.querySelector('[data-bs-dismiss="modal"]').click(); 
    }
  };

  const showDetails = (event) => {
    setSelectedEvent(event);
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary create-event-button"
            data-bs-toggle="modal"
            data-bs-target="#createEventModal"
          >
            +
          </button>
        </div>

        <div className="modal fade" id="createEventModal" tabIndex="-1" aria-labelledby="createEventModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createEventModalLabel">Create Event</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-fields">
                    <label>
                      Event Name:
                      <input type="text" name="name" className="form-control" value={eventDetails.name} onChange={handleChange} required />
                    </label>
                    <label>
                      Date:
                      <input type="date" name="date" className="form-control" value={eventDetails.date} onChange={handleChange} required />
                    </label>
                    <label>
                      Time:
                      <input type="time" name="time" className="form-control" value={eventDetails.time} onChange={handleChange} required />
                    </label>
                    <label>
                      Sponsor:
                      <input type="text" name="sponsor" className="form-control" value={eventDetails.sponsor} onChange={handleChange} required />
                    </label>
                    <label>
                      Co-Sponsor:
                      <input type="text" name="coSponsor" className="form-control" value={eventDetails.coSponsor} onChange={handleChange} />
                    </label>
                    <label>
                      Security:
                      <input type="text" name="security" className="form-control" value={eventDetails.security} onChange={handleChange} />
                    </label>
                    <label>
                      Food:
                      <input type="text" name="food" className="form-control" value={eventDetails.food} onChange={handleChange} />
                    </label>
                    <label>
                      Custodian:
                      <input type="text" name="custodian" className="form-control" value={eventDetails.custodian} onChange={handleChange} />
                    </label>
                    <label>
                      Description:
                      <textarea name="description" className="form-control" value={eventDetails.description} onChange={handleChange} required></textarea>
                    </label>
                    <label>
                      Image:
                      <input type="file" name="image" className="form-control" onChange={handleImageChange} accept="image/*" />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="events-list mt-4">
          {events.map((event, index) => (
            <div key={index} className="event-box p-3 mb-3 border rounded">
              <div className="image-container">
                <img
                  src={event.image ? URL.createObjectURL(event.image) : defaultImage}
                  alt="Event"
                  className="img-fluid event-image"
                />
              </div>
              <h5 className="event-name">{event.name}</h5>
              <button onClick={() => showDetails(event)} className="btn btn-link">
                Show Details
              </button>
              <button onClick={() => handleDelete(index)} className="btn btn-danger">
                Delete
              </button>
              <div className="livestream-container">
                <Link to="/camera" className="btn btn-link livestream-icon">
                  <FaVideo size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="eventDetailsModal" tabIndex="-1" aria-labelledby="eventDetailsModalLabel" aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="eventDetailsModalLabel">{selectedEvent.name}</h5>
              </div>
              <div className="modal-body">
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Sponsor:</strong> {selectedEvent.sponsor}</p>
                <p><strong>Co-Sponsor:</strong> {selectedEvent.coSponsor}</p>
                <p><strong>Security:</strong> {selectedEvent.security}</p>
                <p><strong>Food:</strong> {selectedEvent.food}</p>
                <p><strong>Custodian:</strong> {selectedEvent.custodian}</p>
                <p><strong>Description:</strong> {selectedEvent.description}</p>
                <div className="modal-image-container">
                  <img
                    src={selectedEvent.image ? URL.createObjectURL(selectedEvent.image) : defaultImage}
                    alt="Event"
                    className="img-fluid modal-event-image"
                  />
                </div>
                <Link to="/camera" className="btn btn-primary mt-3">
                  <FaVideo size={20} /> Livestream
                </Link>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
