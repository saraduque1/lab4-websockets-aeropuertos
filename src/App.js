import React, { useState, useEffect } from 'react';
import FlightInfoCard from './components/FlightInfoCard';
import FlightInfoForm from './components/FlightInfoForm';
import io from 'socket.io-client';
import './App.css';

const App = () => {
  const [flightInfo, setFlightInfo] = useState({
    gate: 'Gate 1',
    flightNumber: '',
    destination: '',
    airline: '',
    departureTime: ''
  });

  const [formInfo, setFormInfo] = useState(flightInfo);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    newSocket.on('flightInfoUpdated', (data) => {
      console.log('Received updated flight info:', data);
      setFlightInfo(data);
      setFormInfo(data);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlightInfo(formInfo);

    if (socket && socket.connected) {
      socket.emit('updateFlightInfo', formInfo);
    }
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <FlightInfoCard flightInfo={flightInfo} />
        <FlightInfoForm
          formInfo={formInfo}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
