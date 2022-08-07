import React,{useState} from 'react'

export default function Counter() {

    const [count,setCount]=useState(0)

    const IncrementHandler=()=>{
        setCount((prev)=>prev+5)
    }

    const decrementHandler=()=>{
        {(count>0) && setCount(count-1)}
    }
    const resetHandler=()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>reset</button>

    </div>
  )
}

