import React from 'react'

const Task = () => {

    let money =15
    let choclate=1
    let wrapper=3
    let totalChoclate=money/choclate
    let totalChoclateWithWrapper=totalChoclate+ money/wrapper
  return (
    <div>{totalChoclateWithWrapper}</div>
  )
}

export default Task