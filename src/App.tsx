import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';

import './App.css';
import StartPage from './screens/StartPage';
import QuestionsScreen from './screens/QuestionsScreen';
import EndPage from './screens/EndPage';

//TODO useEffects goto end screen if test was already taken (set local)

function App() 
{
  const [page, setPage] = React.useState("start");
  return (
    <div>
      {page === "start" && <StartPage setPage={setPage}/>}
      {page === "questions" && <QuestionsScreen setPage={setPage} />}
      {page === "end" && <EndPage />}
    </div>
  );
}

export default App;
