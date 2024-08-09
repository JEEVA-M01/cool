import React from 'react';
//Functional Component 
const App = ()=>
{
    return(
        <div>
            <h1>This is world functional Component</h1>
        </div>
    )
}
export default App;
// Class component
export class Day3App extends React.Component
{
  render()
  {
    return(
        <div>
            <h1>This is a Class component</h1>
        </div>
    )
  }
}
