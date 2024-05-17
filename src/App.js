import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Garage from './components/Garage';
import Settings from './components/Settings';
import Game from './components/Game';
import carData from './assets/cars/carData.json';
import './styles.css';



const App = () => {
  const [user, setUser] = useState({
    currentCar: null,
  });
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carData);
  }, []);

  const handleSelectCar = (car) => {
    setUser({
      ...user,
      currentCar: car,
    });
  };

  const handlePlay = (car) => {
    setUser({
      ...user,
      currentCar: car,
    });
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home user={user} cars={cars} handlePlay={handlePlay} />}
          />
          <Route
            path="/shop"
            element={<Shop buyCar={handleSelectCar} />}
          />
          <Route
            path="/garage"
            element={<Garage user={user} selectCar={handleSelectCar} />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/game"
            element={<Game car={user.currentCar} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
