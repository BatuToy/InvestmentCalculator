import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 10
  }
  );

  const inputIsValid = userInput.duration >= 1 
                        && userInput.expectedReturn > 0 
                        && userInput.annualInvestment >= 1 
                        && userInput.initialInvestment >= 1


  const handleUserInput = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  return (
    <>
      <Header />
      <UserInput id="user-input" userInput={userInput} onChangeInput={handleUserInput} />
      {!inputIsValid && <p className="center">Please enter the duration time greater then Zero!</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App;
