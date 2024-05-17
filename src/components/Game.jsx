import React, { useEffect, useState } from 'react';
import './Game.css';

const Game = ({ car }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState(180);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!car) {
      console.error("No car selected for the game.");
      return;
    }

    const handleKeyDown = (e) => {
      if (!gameOver) {
        switch (e.key) {
          case 'ArrowUp':
            setPosition((prev) => ({ ...prev, y: prev.y - car.speed }));
            break;
          case 'ArrowDown':
            setPosition((prev) => ({ ...prev, y: prev.y + car.speed }));
            break;
          case 'ArrowLeft':
            setPosition((prev) => ({ ...prev, x: prev.x - car.speed }));
            break;
          case 'ArrowRight':
            setPosition((prev) => ({ ...prev, x: prev.x + car.speed }));
            break;
          default:
            break;
        }
      }
    };

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          setGameOver(true);
          return 0;
        }
      });
    }, 1000);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(timer);
    };
  }, [car, gameOver]);

  useEffect(() => {
    const handleCollision = () => {
      // Check if the car is out of bounds (off the road)
      if (position.y < 0 || position.y > window.innerHeight || position.x < 0 || position.x > window.innerWidth) {
        setGameOver(true);
      }
    };

    window.addEventListener('mousemove', handleCollision);

    return () => {
      window.removeEventListener('mousemove', handleCollision);
    };
  }, [position]);

  if (!car) {
    return <div>No car selected for the game.</div>;
  }

  return (
    <div className="game">
      <h2>Game</h2>
      <p>Time Left: {timeLeft} seconds</p>
      {gameOver ? (
        <p>Game Over! You lasted {180 - timeLeft} seconds.</p>
      ) : (
        <div className="road-container">
          <div className="road" />
          <div className="bush-left" />
          <div className="bush-right" />
          <div className="car" style={{ left: position.x, top: position.y }} />
        </div>
      )}
    </div>
  );
};

export default Game;
