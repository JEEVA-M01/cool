import React from 'react';

const alertMsg = () =>
{
  alert("Message from Javascript Alert!");
  console.log("Message to developer");
}

const App = () =>
{
    return (
        <div className='app'>
             <center>
            <h2>D1 CE-1</h2>
          <h1>Let we see the output of JAVASCRIPT</h1>
          <br></br>
          <button onClick={alertMsg}>CLICK ME!!</button>
          </center>
        </div>
    )
}
export default App; 