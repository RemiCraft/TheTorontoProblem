import React from 'react';
import QuestionPage from "./QuestionPage";
import questions from './Questions';
import useLocalStorage from './useLocalStorage';

function QuestionsScreen(props: {setPage: (page: string) => void;})
{
    const [questionNumber, setQuestionNumber] = useLocalStorage("questionNumber");

    const advanceQuestion = React.useCallback(() => {
        setQuestionNumber(questionNumber + 1);
    }, [questionNumber]);

    React.useEffect(() => {
        if (questionNumber >= questions.length)
        {
            props.setPage("end");
        }
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