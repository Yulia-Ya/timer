import React, { useState } from 'react'
import { Button } from '../Button'

export const Timer = () => {
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)

  return (
    <div>
        <h2>{minutes} : {seconds} </h2>
        <Button title='Start' onClick={()=>{}}/>
        <Button title='Stop' onClick={()=>{}}/>
        <Button title='Reset' onClick={()=>{}}/>
   
    </div>
  )
}
