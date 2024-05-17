import React, { useState, useEffect } from 'react';
import carData from '../assets/cars/carData.json'; // Create a JSON file with car data

const Shop = ({ buyCar }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Mark the first car as unlocked by default
    const updatedCars = carData.map((car, index) => ({
      ...car,
      locked: index !== 0, // Lock all except the first car
    }));
    setCars(updatedCars);
  }, []);

  return (
    <div className="shop">
      <h2>Shop</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Speed: {car.speed}</p>
            <p>Price: ${car.price}</p>
            <button onClick={() => buyCar(car)} disabled={car.locked}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
