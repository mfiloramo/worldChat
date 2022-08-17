import React from 'react';
import axios from 'axios';
import * as io from '../../node_modules/socket.io/client-dist/socket.io';


function TestClient() {
  /** STATE OF TESTCLIENT WOULD BE DECLARED HERE USING USESTATE HOOKS */
  // ADD STATE INITIALIZATION CODE HERE

  return (
    <div className={"mainContainer"}>
      <meta charSet={"UTF-8"} />
      <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
      <title>Test Client</title>
      <link rel={"stylesheet"} type={"text/css"} href={"../stylesheets/styles.css"} />
      <box className={'box'}>This is a Tailwind box</box>
      <br/>
      <button className={'btn'} onClick={() => {console.log('hello there!')}}>This is a Tailwind button</button>
    </div>
  )
}


export default TestClient;