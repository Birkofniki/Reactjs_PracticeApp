import React from "react"
// import logo from './logo.svg';.. These are not needed, were create by react DOM
// import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp1, ClassComp2} from "./Components/ClassComp";
import ClickComp from "./Components/ClickComp";
import CounterComp from "./Components/CounterComp";
import ParentComparerComp from "./Components/ParentComparerComp";

function App() {
  return (
    <div>
      <h1>Hello! Welcome to Augastino's work </h1>
      <h1>This is about React Components</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp1 /> {/* self closing tag, also to comment we use braces first*/}
      <ClassComp2 />
      <ClickComp />

      <CounterComp />
      <ParentComparerComp />
      </div>
  );
} // The component names can be container tags e.g (<FunctionalComp></FunctionalComp>), or self-closing, e.g  <FunctionalComp /> ......

export default App;
