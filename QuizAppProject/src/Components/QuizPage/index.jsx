import { useState, useEffect, useContext } from "react";
import { QuestionContext } from "../../modules/fetchQuestions";
import { Button } from "../Button";
import { shuffle } from "../../Utils";
import { ScoreSentence } from "../Score";
import { decode } from 'html-entities';
import './styles.css';

export const QuizPage = ({setStart, start}) => {
    const questionData = useContext(QuestionContext);
    const [questions, setQuestions] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const [userAnswersData, setUserAnswersData] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
    });
    const [score, setScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [correctAnswersData, setCorrectAnswersData] = useState(null);

    useEffect(() => {
        const answerArr = [];
        const correctAnswers = [];
        for (let value of questionData) {
            const questionAndAnswerArr = [];
            const allAnswers = [];
            allAnswers.push(decode(value.correct_answer));
            correctAnswers.push(decode(value.correct_answer))
            value.incorrect_answers.forEach(answer => allAnswers.push(decode(answer)));
            shuffle(allAnswers);
            questionAndAnswerArr.push(decode(value.question));
            questionAndAnswerArr.push(allAnswers);
            answerArr.push(questionAndAnswerArr)
        }
        setQuestions(answerArr);
        setCorrectAnswersData(correctAnswers);
    }, [questionData]);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserAnswersData(prev => {
            return {
                ...prev,
                [name]: value
            }
        });

    }

    
    function checkAnswers(e) {
        e.preventDefault();
        if(!Object.values(userAnswersData).includes('')) {
            setCompleted(true);
            setErrorMessage(null);
            setBgColor('#F8BCBC')
            for (let key in userAnswersData) {
                if (userAnswersData[key] === correctAnswersData[key]) {
                    setScore(prevScore => prevScore + 1);
                }
            }
        } else {
            setErrorMessage('Please, complete all the questions!');
        }
    }
    
    return (
        <>
        {questionData.length > 0 && <form onSubmit={checkAnswers}>
            {!completed && errorMessage && <p className="error-msg">{errorMessage}</p>}
            {completed && <ScoreSentence score={score} />}
            {
                questions.map((question, i) => (
                    <fieldset className="question-block">
                        {
                            question.map(answer => (
                                <>
                                    {
                                        typeof (answer) !== 'object' ? (<p className="question">{answer}</p>) : (
                                            <>
                                                {answer.map(an => (
                                                    <>
                                                        <input
                                                            type='radio'
                                                            id={an}
                                                            value={an}
                                                            name={i}
                                                            onChange={handleChange}
                                                            checked={userAnswersData[i] === an}
                                                            disabled={completed}
                                                          
                                                            
                                                        />
                                                        <label
                                                            className={completed && correctAnswersData.includes(an) && 'green'}
                                                            htmlFor={an}
                                                            onClick={() => !completed && setBgColor('#c1c7e6')}
                                                            style={{backgroundColor: userAnswersData[i] === an && bgColor}}
                                                            >{an}
                                                        </label></>))}
                                            </>
                                        )
                                    }
                                </>
                            ))
                        }
                    </fieldset>
                ))
            }
            <Button completed={completed} setStart={setStart} />
         </form>}
        </>
    )
}