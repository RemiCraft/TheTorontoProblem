import { Button, Stack } from 'react-bootstrap';
function EndPage()
{
    //TODO Add a line showing how many people took the quiz
    return (
      <div>
        <Stack>
          <h1 className="text-center">
            {"You Moved To Toronto Canada " + localStorage.getItem("numberYes") + " Times"}
          </h1>
          <img
            style={{ alignSelf: "center" }}
            src="Images/Start.png"
            width={1000}
            height={200}
          ></img>
        </Stack>
      </div>
    );
}

export default EndPage;