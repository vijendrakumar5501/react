import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increament } from '../store/features/counter/counterSlice';

const Counter = () => {

    const state =useSelector(state=>state.counter);
    const dispatch=useDispatch();
    
    console.log(state)

    const handleIncreament=()=>{
        dispatch(increament())
    }


  return (
    <div>{state.value}
    
    <button onClick={handleIncreament}>clik </button>
    
    </div>
  )
}

export default Counter