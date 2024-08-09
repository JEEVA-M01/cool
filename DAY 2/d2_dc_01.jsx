import React from 'react';
const containerStyle = {
    textAlign:'center',
    border:'5px solid pink',
    backgroundColor:'cyan'
};
const conStyle = {
    textAlign:'center',
    border:'5px solid red',
    backgroundColor:'red',
    paddingTop:'20px',
   paddingBottom: '20px'
};

const componentStyle = {
    textAlign:'center',
    border:'5px solid pink',
    backgroundColor:'darkseagreen',
    paddingTop:'50px',
    paddingBottom:'50px'
    
    
};
const Car =()=>
{
   return(
    <div style={containerStyle}>
        <h2>Tesla Model S</h2>
        <br></br>
        <img src='https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt ='img'/>
    </div>
   )
}
const Location =()=>
{
    return(
        <div style={componentStyle}>
            <h2>Tesla</h2>
            <h3>Palo Alto</h3>
        </div>
    )
}
const App=()=>{
    
    return(
        <div style={conStyle}>
            <b><h1>Car and Location Info</h1></b>
            <Car/>
            <Location/>
        </div>
    )
}
export default App;
