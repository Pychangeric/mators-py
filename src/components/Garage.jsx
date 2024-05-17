import React from 'react';

const Garage = ({ user, selectCar }) => (
  <div className="garage">
    <h2>Garage</h2>
    <ul>
      {user.cars.map((car) => (
        <li key={car.id}>
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <button onClick={() => selectCar(car)}>Select</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Garage;
