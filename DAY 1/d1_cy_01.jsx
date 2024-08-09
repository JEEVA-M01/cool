import React from 'react';
const comp =()=>{
     
    const name1="Kabil";
    const name2="Kabil";
    const object1 ={name: "Kabil"};
    const object2 ={name: "Kabil"};

   console.log(name1 === name2);
   console.log(object1 === object2);
   alert("See the output in console to compare datatypes with same value");
}
 const App =() =>
 {
    return(
        <div>
    <h1> Lets compare Primitive data and reference dataTypes Comparision</h1>
    <button onClick={comp}>Click me to compare</button>
        </div>
    )
 }
 export default App;