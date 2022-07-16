import logo from "./logo.svg";
import "./App.css";
import UserAnswer from './UserAnswer';
import {useState, useEffect} from 'react';
import Equation from "./Equation";
import Score from "./Score";
import RightWrongMessage from "./RightWrongMessage";

const App = () => {
  const [userAnswer, setUserAnswer] = useState(null);
  const [numCorrect, setNumCorrect] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [solution, setSolution] = useState(null);
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    if (userAnswer !== null) {
      if (userAnswer === solution) {
        setNumCorrect(numCorrect+1);
        setMessage("Correct");
      } else {
        setMessage("Wrong, you big DUMMY!");
      }
      setNumQuestions(numQuestions+1);
    }
    setUserAnswer(null);
  }, [userAnswer !== null])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Equation setSolution={setSolution} numQuestions={numQuestions} userAnswer={userAnswer} />
        <UserAnswer setUserAnswer={setUserAnswer} numQuestions={numQuestions} setNumQuestions={setNumQuestions} />
        <Score numCorrect={numCorrect} numQuestions={numQuestions} />
        <RightWrongMessage message={message} />
      </div>
    </div>
  );
};

export default App;
