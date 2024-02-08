import './App.css';
import { HomePage } from './Components/HomePage';
import { QuizPage } from './Components/QuizPage';
import { useState, useEffect, useRef } from 'react';
import { QuestionProvider } from './modules/fetchQuestions';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {!start ? <HomePage setStart={setStart}/> :
       <QuestionProvider>
           <QuizPage setStart={setStart} start={start}/>
       </QuestionProvider>}
    </div>
  );
}

export default App;
