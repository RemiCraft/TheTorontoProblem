import React from 'react';
import { Question } from "./Questions";
import { Button } from 'react-bootstrap';


interface QuestionProps{
    question: Question;
    advanceQuestion: () => void;
}

//function Question(props: {prompt: string, id: number})
function QuestionPage(props: QuestionProps)
{
    const [isResultsShown, setIsResultsShown] = React.useState(false);

    const onAnswer = React.useCallback(() => {
        setIsResultsShown(true)
    }, []);

    const onAdvance = React.useCallback(() => {
        setIsResultsShown(false);
        props.advanceQuestion();
    }, [props]);
    const {question} = props;
    //const question = props.question;

    return (
        <div>
            <h1>Question: {question.id}</h1>
            <p>{question.prompt}</p>
            <Button
                variant="primary"
                disabled={isResultsShown}
                onClick={onAnswer}>
                Yes
            </Button>
            <Button
                variant="primary"
                disabled={isResultsShown}
                onClick={onAnswer}>
                No
            </Button>
            {isResultsShown && (
                <Button
                variant="primary"
                onClick={onAdvance}>
                Next
            </Button>
            )}
        </div>
    )
}

export default QuestionPage;