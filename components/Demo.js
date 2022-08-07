import React, { useEffect, useState } from 'react'

export default function Demo() {
    const [data,setData]=useState();

    const postHandler=()=>{
        setData("posts")
    }

    const userHandler=()=>{
        setData("users")
    }

    useEffect(()=>{
        console.log("useEffect is called")
    },[])

  return (
    <div>
        <h1>{data}</h1>
        <button onClick={postHandler}>Posts</button>
        <button onClick={userHandler}>Users</button>
    </div>
  )
}

