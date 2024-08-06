import React from 'react';
const Ref_datatypes =()=>
{
  let myobject= {name:"madras"};
  let newobject= myobject;
  myobject.name="Coimbatore";

  let myarray=['a','e','i','o'];
   let newarray= myarray;
   myarray.push('u');
   console.log("myobject : ",myobject.name);
   console.log("newobject : ",newobject.name);
   console.log("myarray : ",myarray);
   console.log("newarray : ",newarray);
   alert("Check the console output!!");
}
const App=()=>
{
    return(
        <>
        <center>
            <h2>D1 CE-2</h2>
            <h1>Reference data types use same memory</h1>
            <button onClick={Ref_datatypes}>Reference Data Types</button>
          </center>
        </>
    )
};
export default App;