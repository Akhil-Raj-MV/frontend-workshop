import Head from 'next/head'
import Image from 'next/image'
import { useState,createContext } from 'react'

import Button from '../components/Button'
import Counter from '../components/Counter'
import Demo from '../components/Demo'
import Greeting from '../components/Greeting'
import MovieList from '../components/MovieList'
import UserProfile from '../components/UserProfile'
import Welcome from '../components/Welcome'

import styles from '../styles/Home.module.css'



export const userNameContext=createContext();

export default function Home() {

  const [userName,setUserName]=useState("John");


  return (
    <div>
        {/* <Welcome name="AKhil" age="20"/>
        <Greeting >
          <div>
            <h1>Children content</h1>
          </div>
        </Greeting>
        <Button/> */}
        {/* <Counter/> */}
        {/* <Demo/> */}
        {/* <MovieList/> */}
        
        {/* <UserProfile/> */}

        <userNameContext.Provider value={userName}>
          <UserProfile/>
        </userNameContext.Provider>
        
    </div>
  )
}
