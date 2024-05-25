import React from 'react';
import './FlightInfoCard.css';

const FlightInfoCard = ({ flightInfo }) => (
    <div className="custom-card">
        <div className="custom-card-body">
            <h3 className="custom-card-title">Puerta de Embarque: {flightInfo.gate}</h3>
            <p className="custom-card-text"><strong>Número de Vuelo:</strong> {flightInfo.flightNumber}</p>
            <p className="custom-card-text"><strong>Destino:</strong> {flightInfo.destination}</p>
            <p className="custom-card-text"><strong>Aerolínea:</strong> {flightInfo.airline}</p>
            <p className="custom-card-text"><strong>Hora de Salida:</strong> {flightInfo.departureTime}</p>
        </div>
    </div>
);

export default FlightInfoCard;
