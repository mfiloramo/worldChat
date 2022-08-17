import React from 'react';
// import axios from 'axios';
// import * as io from '../../node_modules/socket.io/client-dist/socket.io';


function TestClient() {
  /** STATE OF TESTCLIENT WOULD BE DECLARED HERE USING USESTATE HOOKS */
  // ADD STATE INITIALIZATION CODE HERE

  return (
    <div className={"mainContainer"}>
      <meta charSet={"UTF-8"} />
      <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
      <title>Test Client</title>
      <link rel={"stylesheet"} type={"text/css"} href={"../stylesheets/styles.css"} />
      <div className={'box'}>This is a Tailwind box</div>
      <br/>
      <button className={'btn'} onClick={() => {console.log('hello there!')}}>This is a Tailwind button</button>
    </div>
  )
}

/**
 react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
 */

export default TestClient;