import React from 'react'
import { useNavigate } from 'react-router-dom'

const Studentinfo = () => {
 let navigate = useNavigate();

 function handleBack () {
  navigate (-1);
    
 }
 
    return (
    <div> <button onClick={handleBack}>back</button>
        Studentinfo</div>
  )
}

export default Studentinfo