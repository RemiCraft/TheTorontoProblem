import React from 'react';
import { Question } from "./Questions";
import { Button, Container, Row, Col, ButtonGroup, Stack } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore"; 

interface QuestionProps{
    question: Question;
    advanceQuestion: () => void;
}

//function Question(props: {prompt: string, id: number})
function QuestionPage(props: QuestionProps)
{

    const [isYesAnswer, setIsYesAnswer] = React.useState(1);
    const [isResultsShown, setIsResultsShown] = React.useState(false);

    const onAnswerYes = React.useCallback(() => {
        setIsResultsShown(true)
        setIsYesAnswer(isYesAnswer + 1);
        //console.log(isYesAnswer);
        localStorage.setItem("numberYes", isYesAnswer.toString());
    }, [[isYesAnswer]]);

    const onAnswerNo = React.useCallback(() => {
      setIsResultsShown(true);
    }, []);

    const onAdvance = React.useCallback(() => {
        setIsResultsShown(false);
        props.advanceQuestion();
    }, [props]);
    const {question} = props;
    //const question = props.question;

    return (
      <div>
        <Container fluid>
          <Stack gap={2}>
            <h1 className="text-center">Question: {question.id}</h1>
            <h1 className="text-center">{question.prompt}</h1>
            <img
              style={{ alignSelf: "center" }}
              src={"Images/Questions/" + question.id + ".png"}
              width={640}
              height={360}
            ></img>
            <h1 className="text-center">Do You Move To Toronto Canada?</h1>
            <Row>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    disabled={isResultsShown}
                    onClick={onAnswerYes}
                  >
                    Yes
                  </Button>
                </ButtonGroup>
              </Col>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    disabled={isResultsShown}
                    onClick={onAnswerNo}
                  >
                    No
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            {isResultsShown && (
              <ButtonGroup className="d-flex">
                <Button variant="outline-dark" size="lg" onClick={onAdvance}>
                  Next
                </Button>
              </ButtonGroup>
            )}
          </Stack>
        </Container>
      </div>
    );
}

export default QuestionPage;