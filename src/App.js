import './App.css';
import React from "react";
import Home from "./Components/Body/Home";
import {Route, Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Chords from "./Components/Body/Chords";
import Scales from './Components/Body/Scales';
import About from './Components/Body/About';
import Tuner from './Components/Body/Tuner';
import ChordsHome from './Components/Body/ChordsHome';
import ScalesHome from './Components/Body/ScalesHome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/chords">
          <ChordsHome/>
        </Route>
        <Route exact path="/scales">
          <ScalesHome/>
        </Route>
        <Route exact path="/chords/:chordId">
          <Chords/>
        </Route>
        <Route exact path="/scales/:scaleId">
          <Scales/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/tuner">
          <Tuner/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
