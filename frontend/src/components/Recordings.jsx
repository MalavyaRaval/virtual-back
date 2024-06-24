// Recordings.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Nav/Navbar';
import Footer from './Footer';

const Recordings = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const savedRecordings = JSON.parse(localStorage.getItem('recordings')) || [];
    const updatedRecordings = savedRecordings.map(recording => {
      if (!recording.data) {
        console.error("Recording data is missing:", recording);
        return recording;
      }

      const dataParts = recording.data.split(',');
      if (dataParts.length < 2) {
        console.error("Invalid recording data format:", recording.data);
        return recording;
      }

      const blob = b64toBlob(dataParts[1], 'video/webm');
      const url = URL.createObjectURL(blob);
      return { ...recording, url };
    }).filter(recording => recording.url); // Filter out any invalid recordings

    setRecordings(updatedRecordings);
  }, []);

  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const handleDelete = (id) => {
    const updatedRecordings = recordings.filter(recording => recording.id !== id);
    setRecordings(updatedRecordings);
    localStorage.setItem('recordings', JSON.stringify(updatedRecordings));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Recordings</h1>
        {recordings.length === 0 ? (
          <p>No recordings available.</p>
        ) : (
          <ul>
            {recordings.map((recording) => (
              <li key={recording.id}>
                <a href={recording.url} target="_blank" rel="noopener noreferrer">
                  {recording.name}
                </a> - {recording.date}
                <button onClick={() => handleDelete(recording.id)} className="btn btn-danger btn-sm ml-2">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Recordings;
