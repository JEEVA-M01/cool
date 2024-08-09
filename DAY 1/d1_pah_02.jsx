import React from 'react';
const Datatypes =()=>{
      let age=18;
      let name = "Kiran";
      let setStatus =false;
      let userDefault =undefined;
      let responseValue =null;

   console.log(age);
   console.log(name);
   console.log(setStatus);
   console.log(userDefault);
   console.log(responseValue);
      
   let oldage = age;
   age= 25;
   let status = setStatus;
   setStatus = true;
   
   console.log(oldage);
   console.log(age);
   console.log(setStatus);
   console.log(status);
   alert("Check the console Output!!");
}
 const App =() =>
 {
    return(
        <div>
    <h1>Primitive data Types copies the values</h1>
    <button onClick={Datatypes}>Primitives DataTypes</button>
        </div>
    )
 }
 export default App;