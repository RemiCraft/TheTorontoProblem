import React from 'react';
import QuestionPage from "./QuestionPage";
import questions from './Questions';

function QuestionsScreen(props: {setPage: (page: string) => void;})
{
    const [questionNumber, setQuestionNumber] = React.useState(0);

    React.useEffect(() => {
        const questionNumberString = localStorage.getItem("questionNumber");
        if (questionNumberString)
        {
            //setQuestionNumber(parseInt(questionNumberString));
        }
    }, []);

    React.useEffect(() => {
        if (questionNumber !== 0)
        {
            localStorage.setItem("questionNumber", questionNumber.toString());
        }
    }, [questionNumber]);

    React.useEffect(() => {
        if (questionNumber >= questions.length)
        {
            props.setPage("end");
        }
    }, [questionNumber]);

    const advanceQuestion = React.useCallback(() => {
        setQuestionNumber(questionNumber + 1);
    }, [questionNumber]);

    const question = questions[questionNumber];

    if (question === undefined)
    {
        return null;
    }

    return (
        <div>
        <QuestionPage
        question={question}
        advanceQuestion={advanceQuestion}
         />
        </div>
    )
}

export default QuestionsScreen;