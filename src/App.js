import React from "react";
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
import "./App.css";
import Pageheader from "./components/Pageheader";
import PlayerForm from "./components/PlayerForm";
import TeamForm from "./components/TeamForm";
import "./styles/main.css";

function App() {
  return (
    <React.Fragment>
      <Pageheader />
      {/* <PlayerForm /> 
      <TeamForm />*/}
    </React.Fragment>
  );
}

export default App;
