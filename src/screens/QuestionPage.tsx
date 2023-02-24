import React from 'react';
import { Question } from "./Questions";
import { Button, Container, Row, Col, ButtonGroup, Stack } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore"; 
import useLocalStorage from './useLocalStorage';
import useAddResult, { useGetResult } from '../useResult';

interface QuestionProps{
    question: Question;
    advanceQuestion: () => void;
}

//function Question(props: {prompt: string, id: number})
function QuestionPage(props: QuestionProps)
{

    const [yesAnswerCount, setIsYesAnswer] = React.useState(1);
    const [isResultsShown, setIsResultsShown] = React.useState(false);
    const [numberYes, setNumberYes] = useLocalStorage("numberYes");
    const addResult = useAddResult();
    const [percentageYes, percentageNo, isLoaded] = useGetResult(props.question.id);

    const onAnswerYes = React.useCallback(() => {
        setIsResultsShown(true)
        setIsYesAnswer(yesAnswerCount + 1);
        //console.log(isYesAnswer);
        setNumberYes(numberYes + 1);
        addResult({
          questionID: props.question.id,
          isYes: true
        });
    }, [[yesAnswerCount, props.question.id]]);

    const onAnswerNo = React.useCallback(() => {
      setIsResultsShown(true);
      addResult({
        questionID: props.question.id,
        isYes: false
      });
    }, [props.question.id]);

    const onAdvance = React.useCallback(() => {
        setIsResultsShown(false);
        props.advanceQuestion();
    }, [props]);
    const {question} = props;
    //const question = props.question;

    return (
      <div>
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Question: {question.id}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h1>{question.prompt}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" md={{offset: 3, span: 6}}>
              <img
                className="w-100 mb-3"
                src={"Images/Questions/" + question.id + ".png"}
              ></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-center">Do You Move To Toronto Canada?</h1>
            </Col>
          </Row>
            <Row>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    disabled={isResultsShown || !isLoaded}
                    onClick={onAnswerYes}
                  >
                    {!isResultsShown ? "Yes" : `${Math.round(percentageYes * 100)}% Said Yes`}
                  </Button>
                </ButtonGroup>
              </Col>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    disabled={isResultsShown || !isLoaded}
                    onClick={onAnswerNo}
                  >
                    {!isResultsShown ? "No" : `${Math.round(percentageNo * 100)}% Said No`}
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            {isResultsShown && (
              <ButtonGroup className="d-flex mt-2">
                <Button variant="outline-dark" size="lg" onClick={onAdvance}>
                  Next
                </Button>
              </ButtonGroup>
            )}
        </Container>
      </div>
    );
}

export default QuestionPage;