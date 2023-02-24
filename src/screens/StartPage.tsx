import { Button, Container, Row, Col, Stack } from 'react-bootstrap';
import useLocalStorage from './useLocalStorage';
import React from "react"
import questions from './Questions';
//import StartImage from "Images/Start.png";
function StartPage(props: {setPage: (page: string) => void;})
{
  const [questionNumber, setQuestionNumber] = useLocalStorage("questionNumber");

  const onStart = () => {
    props.setPage("questions");
  }

  React.useEffect(() => {
    if (questionNumber >= questions.length)
    {
        props.setPage("end");
    }
  }, [questionNumber]);

    return (
      <div>
        <Container>
          <Row>
            <Col className="text-center">
              <h1>The Toronto Problem</h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" xs={{offset: 1, span: 10}}>
            <img
              //style={{ alignSelf: "center" }}
              className="w-100 mb-3"
              src="Images/black.png"
            ></img>
            </Col>
          </Row>
          <Row>
            <Col xs={{offset: 1, span: 10}}>
              <Button variant="outline-dark" size="lg" className="w-100" onClick={onStart}>
                Start
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default StartPage;