import React from 'react'
import B from './B'
import C from './C'
import D from './D'
import { useMyContext } from './MyContext'

const A = () => {
    const data=useMyContext();
    const {count}=data;
  return (
    <div className='w-1/2 bg-red-300 mx-auto h-1/3 text-center'>

        <h2 className='bg-orange-200 w-1/2 h-1/2   mx-auto my-auto flex justify-center items-center'>A
</h2>
<p>{count}</p>
<C/>
<D/>
    </div>
    
  )
}

export default A