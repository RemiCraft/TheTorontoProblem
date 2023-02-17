import { Button, Container, Row, Col, Stack } from 'react-bootstrap';
//import StartImage from "Images/Start.png";
function StartPage(props: {setPage: (page: string) => void;})
{

const onStart = () => {
    props.setPage("questions");
}

    return (
      <div>
        <Container fluid>
          <Stack>
            <h1 className="text-center">The Toronto Problem</h1>
            <img
              style={{ alignSelf: "center" }}
              src="Images/Start.png"
              width={1000}
              height={200}
            ></img>
            <Button variant="outline-dark" size="lg" onClick={onStart}>
              Start
            </Button>
          </Stack>
        </Container>
      </div>
    );
}

export default StartPage;