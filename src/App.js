import { useState } from 'react';
import './App.css';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  
  const handleClick = (e) => {
    setUserChoice(e)
  }

  return (
    <div>
        <h1>User choice is: {userChoice}</h1>
        <h1>Computer choice is:</h1>
        <button onClick={() => handleClick('rock')}>Rock</button>
        <button onClick={() => handleClick('paper')}>Paper</button>
        <button onClick={() => handleClick('scissors')}>Scissors</button>
    </div>
  );
}

export default App;
