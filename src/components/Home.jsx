import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Game from './Game'; // Import the Game component

const Home = ({ user, cars }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const handlePlay = () => {
    setGameStarted(true);
  };

  return (
    <div className="home">
      <h1>Welcome to the Car Game</h1>
      <div className="current-car">
        <h2>Your Current Car:</h2>
        {user.currentCar ? (
          <img src={user.currentCar.image} alt={user.currentCar.name} />
        ) : (
          <p>No car selected</p>
        )}
      </div>
      <div className="home-buttons">
        {gameStarted ? (
          <Game car={user.currentCar} />
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
        <Link to="/shop"><button>Shop</button></Link>
        <Link to="/garage"><button>Garage</button></Link>
        <Link to="/settings"><button>Settings</button></Link>
      </div>
    </div>
  );
};

export default Home;
