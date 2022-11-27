import React from 'react'

const Callbackfunc = ({ todosfour, addTodofour }) => {
    console.log("child render")
  return (<>
    <h6>My Todos</h6>
      {todosfour.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodofour}>Add Todo</button>
      </>
  )
}

export default Callbackfunc