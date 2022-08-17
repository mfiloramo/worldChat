import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import TestClient from "./components/test-client.jsx";


function App() {
  return (
    <div>
      <TestClient />
    </div>
  );
}


export default App;