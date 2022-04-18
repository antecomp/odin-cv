import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';

import EntireForm from "./components/EntireForm";
import CVRender from "./components/CVRender";

function App() {

const [cvData, setcvData] = useState({ // I think for any realistic application of this, I would want to use a state-management library.
  name: '',
  prof: '',
  desciption: '',
  address: '',
  email: '',
  phone: '',
  experienceArray: [],
  educationArray: [],
});

  return (
    <div className="App">
      <EntireForm cvData={cvData} setcvData={setcvData} />
      <CVRender cvData={cvData} />
    </div>
  );
}

export default App;
