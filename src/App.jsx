import Header from "./components/Header.jsx"
import { Results } from "./components/Results.jsx";
import { UserInput } from "./components/UserInput.jsx"
import {useState} from 'react'
function App() {
  const [userInput, setUSerInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid=userInput.duration>=1;

  function handlechange(inputIdentifier, newValue) {
    setUSerInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
   <Header/>
   <UserInput userInput={userInput} onChange={handlechange}/>
   {!inputIsValid && <p className="center">Please Enter a Duration greater than Zero.</p>}
{inputIsValid && <Results input={userInput}/>}
   </>
  )
}

export default App
