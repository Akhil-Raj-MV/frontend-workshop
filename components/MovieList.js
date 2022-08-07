import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList() {

const movies=["Spiderman","superman","avenger"]
  return (

    <div>
        {
            movies.map((item)=><MovieItem key={item} item={item} />)
        }
    </div>
  )
}

 