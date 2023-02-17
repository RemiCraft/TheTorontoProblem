import React from 'react';
import { Question } from "./Questions";
import { Button, Container, Row, Col, ButtonGroup, Stack } from "react-bootstrap";

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
        <Container fluid>
          <Stack gap={2}>
            <h1 className="text-center">Question: {question.id}</h1>
            <h1 className="text-center">{question.prompt}</h1>
            <img
              style={{ alignSelf: "center" }}
              src="Images/Questions/Q1.png"
              width={1000}
              height={200}
            ></img>
            <h1 className="text-center">Do You Move To Toronto Canada?</h1>
            <Row>
              <Col>
                <ButtonGroup className="d-flex">
                  <Button
                    variant="outline-dark"
                    size="lg"
                    disabled={isResultsShown}
                    onClick={onAnswer}
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
                    onClick={onAnswer}
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