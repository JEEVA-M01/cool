import React from 'react';
const formatin = {
    textAlign:'center',
    border:'5px solid pink',
    backgroundColor:'lightblue',
    paddingBottom:'300px'
};
const Smile=()=>{
    return(
        <div style={formatin}>
            <h1>Simple Component</h1>
            <h2>It is a functinal component</h2>
            <img src= "https://cdn.vectorstock.com/i/1000v/84/03/smile-emoji-face-cute-eyes-emoticon-symbol-vector-30338403.avif" height={400} alt='smile'/>
        </div>
    )
}
export default Smile;