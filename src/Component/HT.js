import React from 'react';
import './HT.css';
import eye from "./Image/eye.png"



const HT = () => {
  function drag(e) {
 // e.dataTransfer.dropEffect="move";  
  e.dataTransfer.setData("text",e.target.id );
}
function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
 
 
}


  return (
   <>
   {/*drag and drop*/}
   <div className='heading' >Drag and Drop</div><br/>
   <div id="div1" onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}></div>
   <img id="drag1" src={eye}  draggable="true" onDragStart={(e)=>drag(e)} width="36" height="39" value="eye"/><br/>
   </>
  )
}

export default HT