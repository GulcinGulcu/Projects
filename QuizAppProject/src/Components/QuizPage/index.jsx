import { useState, useEffect, useRef } from "react";
import { Button } from "../Button";
import { shuffle } from "../../Utils";
import { ScoreSentence } from "../Score";
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import './styles.css';

export const QuizPage = ({setStart}) => {
    const [data, setData] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null); 
    const renderAfterCalled = useRef(false);
   
    useEffect(() => {
        if (!renderAfterCalled.current) {
            fetch(`https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple`)
                .then(res => res.json())
                .then(questionData => {
                    setData(
                        questionData.results.map(question => {
                            const arr = [...question.incorrect_answers, question.correct_answer];
                            shuffle(arr);
                            return ({...question, id: nanoid(), options: [...arr]})})
                    )})
                .catch(err => console.log(err));
        }
        renderAfterCalled.current = true;
    }, []); 

    const [userAnswersData, setUserAnswersData] = useState({});
    function handleChange(event) {
        const { name, value } = event.target;
        setUserAnswersData(prev => {
            return {
                ...prev,
                [name]: value
            }
        });

    } 

    console.log(userAnswersData)


    
    function checkAnswers(e) {
        e.preventDefault();
        if(Object.entries(userAnswersData).length === 4) {
            setCompleted(true);
            setErrorMessage(null);
            for (let item of data) {
                for(let key in userAnswersData) {
                    if (userAnswersData[key] === item.correct_answer) {
                        setScore(prevScore => prevScore + 1);
                    }
                }
            }
        } else {
            setErrorMessage('Please, complete all the questions!');
        }
    }
    
    return (
        <>
        {data ? <form onSubmit={checkAnswers}>
        {!completed && errorMessage && <p className="error-msg">{errorMessage}</p>}
        {completed && <ScoreSentence score={score} />}
        {data.map(question => 
         (
            <fieldset  className="question-block">
                <p>{decode(question.question)}</p>
                <div className="options">
                {
                    question.options.map(answer => (
                        <>
                          <input type='radio' id={decode(answer)} name={question.id} onChange={handleChange} value={decode(answer)} checked={userAnswersData[question.id] === decode(answer)} disabled={completed}
                         />
                          <label className={`label ${!completed && userAnswersData[question.id] === decode(answer) && 'clicked'} ${completed && userAnswersData[question.id] === decode(answer) && question.correct_answer === decode(answer) && 'correct'} ${completed && userAnswersData[question.id] !== question.correct_answer && userAnswersData[question.id] === decode(answer) && 'incorrect'} ${completed && question.correct_answer === decode(answer) && 'correct'}`} htmlFor={decode(answer)}>{decode(answer)}</label>
                        </>
                    ))
                }
                </div>
            </fieldset>
        )
        )}
         <Button completed={completed} setStart={setStart} />
        </form> : <div className="load-msg"><h2>Loading...</h2></div>}
        </>
    )
}