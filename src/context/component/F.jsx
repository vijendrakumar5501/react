import React from 'react'
import { useMyContext } from './MyContext';

const F = () => {
    const data=useMyContext();
    const {setCount}=data;
    console.log(data)
  return (
    <div className='bg-blue-200 w-1/2 h-1/5 flex justify-center items-center mx-auto'>F
    
    <button   onClick={()=>setCount(prev=>prev+1)} className='bg-yellow-200 w-1/3'>count </button>
    </div>
  )
}

export default F