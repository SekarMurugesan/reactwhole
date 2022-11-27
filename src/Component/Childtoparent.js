import React from 'react'

const Childtoparent = (props) => {

   function Childfunc(e) {     
     props.setchildtoparent(prev=>prev+1);
    }
  return (
    <button onClick={(e)=>Childfunc()}>Child</button>
  )
}

export default Childtoparent
