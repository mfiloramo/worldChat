import React from 'react';
// import axios from 'axios';
// import * as io from '../../node_modules/socket.io/client-dist/socket.io';


function TestClient() {
  /** STATE OF TESTCLIENT WOULD BE DECLARED HERE USING USESTATE HOOKS */
  // ADD STATE INITIALIZATION CODE HERE


  return (
    <div>

      <div className={"testNav"}>
        <a className={"active"} href={"#home"}>Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <br/>

    <div className={"chatRooms"}>

    </div>

    <div className={"mainContainer"}>
      <div className={"box"}>This is a Tailwind box</div>
      <br/>
      <button className={"btn"} onClick={() => {console.log('hello there!')}}>This is a Tailwind button</button>
    </div>

    </div>
  )
}


export default TestClient;