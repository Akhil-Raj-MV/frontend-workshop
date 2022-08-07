import React,{useContext} from 'react'
import { userNameContext } from '../pages'


export default function UserProjects() {
    
    const userName=useContext(userNameContext)

  return (
    <div>UserProjects of {userName}</div>
  )
}

