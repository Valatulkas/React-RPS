import { useDebugValue, useEffect, useState } from 'react';
import './index.css';

const RPS = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('Who shall win?');

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
    <div className='container'>
        <div className='row'>
          <div className='col-9 mx-auto my-5'>
            <h1 className='my-3'>Rock Paper Scissors</h1>
            <h3>You throw: {userChoice}</h3>
            <h3 className='my-4'>Computer throws: {computerChoice}</h3>
            {choices.map((choice, index) => 
              <button className='mx-3' key={index} onClick={() => handleClick(choice)}>{choice}</button>
            )}
            <div className='border rounded border-primary my-5'>
              <h2>{result}</h2>
            </div>
          </div>
        </div>
    </div>
  );
}

export default RPS;
