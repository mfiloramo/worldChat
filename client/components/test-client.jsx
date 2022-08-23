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

      <form action="/action_page.php">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
      </form>

    </div>
  )
}


export default TestClient;