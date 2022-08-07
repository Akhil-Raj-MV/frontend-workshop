import React from 'react'

export default function Button() {

    const onClickHandler=()=>{
        console.log("Clicked me");
    }

  return (
    <div>
        <button onClick={onClickHandler}>Click me</button>
    </div>
  )
}

