import { useState, createContext, useEffect, useRef } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const renderAfterCalled = useRef(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!renderAfterCalled.current) {
            fetch(`https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple`)
                .then(res => res.json())
                .then(questionData => setData(questionData.results))
                .catch(err => console.log(err));
        }
        renderAfterCalled.current = true;
    }, []); 

    return (
        <QuestionContext.Provider value={data}>
            {children}
        </QuestionContext.Provider>
    )
}