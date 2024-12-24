import React from 'react'
import { useParams} from 'react-router-dom'

export const User = () => {

    const {fname ,lname} = useParams()
  return (
    <>
    <h1>my name is   {fname}  <br /> {lname} </h1>
    </>
  )
}


