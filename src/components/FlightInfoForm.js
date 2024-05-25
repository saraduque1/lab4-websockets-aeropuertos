import React from 'react';
import './FlightInfoForm.css';

const FlightInfoForm = ({ formInfo, handleInputChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="custom-form">
        <div className="custom-form-group">
            <label htmlFor="flightNumber" className="custom-form-label">Número de vuelo:</label>
            <input
                type="text"
                className="custom-form-control"
                id="flightNumber"
                name="flightNumber"
                value={formInfo.flightNumber}
                onChange={handleInputChange}
            />
        </div>
        <div className="custom-form-group">
            <label htmlFor="destination" className="custom-form-label">Destino:</label>
            <input
                type="text"
                className="custom-form-control"
                id="destination"
                name="destination"
                value={formInfo.destination}
                onChange={handleInputChange}
            />
        </div>
        <div className="custom-form-group">
            <label htmlFor="airline" className="custom-form-label">Aerolínea:</label>
            <input
                type="text"
                className="custom-form-control"
                id="airline"
                name="airline"
                value={formInfo.airline}
                onChange={handleInputChange}
            />
        </div>
        <div className="custom-form-group">
            <label htmlFor="departureTime" className="custom-form-label">Hora de salida:</label>
            <input
                type="text"
                className="custom-form-control"
                id="departureTime"
                name="departureTime"
                value={formInfo.departureTime}
                onChange={handleInputChange}
            />
        </div>
        <div className="custom-form-group-button">
            <button type="submit" className="custom-btn">Actualizar</button>
        </div>
    </form>
);

export default FlightInfoForm;
