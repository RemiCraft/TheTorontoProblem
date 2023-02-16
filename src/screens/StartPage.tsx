import { Button } from 'react-bootstrap';
//import StartImage from "Images/Start.png";
function StartPage(props: {setPage: (page: string) => void;})
{

const onStart = () => {
    props.setPage("questions");
}

    return (
        <div>
            <h1>The Toronto Problem</h1>
            <img src="Images/Start.png" width={1000} height={200}></img>
            <Button onClick={onStart} variant="primary">Start</Button>
        </div>
    );
}

export default StartPage;