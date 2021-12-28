import { useDebugValue, useEffect, useState } from 'react';
import './index.css';

const RPS = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (e) => {
    setUserChoice(e);
    generateComputerChoice();
  }

  const generateComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomNum];
    setComputerChoice(randomChoice);
  }

  useEffect(() => {
    {
      switch  (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('You`re victorious!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('Computer is victorious!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('Draw! Play again')
          break
      }
    }
  }, [computerChoice, userChoice]); 

  return (
    <div>
        <h1>User choice is: {userChoice}</h1>
        <h1>Computer choice is: {computerChoice}</h1>
        {choices.map((choice, index) => 
          <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
        )}
        <h2>{result}</h2>
    </div>
  );
}

export default RPS;
