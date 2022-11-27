import React,{memo} from 'react'

const memocomponent = () => {
    console.log("a")
  return (
    <div>memocomponent:</div>
    
  )
}

export default memo(memocomponent)