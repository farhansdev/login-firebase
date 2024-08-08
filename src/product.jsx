import React, { useState } from 'react'

function Products({naam, data}) { 
const [a, b] = useState(false);

    // parent component se bheja hwa data naam 
  return (
    <div className="w-full h-60 bg-zinc-600 text-white">
        {/* <h1 className='text-2xl px-5 py-5'>{naam}</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2>  */}
        {/* recieving data via props  */}

        {/* POINT 03 khud ka data bana na  */}
        <h1 className='text-2xl px-5 py-5'>
            {a === false ? "print Hello" : "or print World"}</h1> 
            {/* ternary condition */}
        <button onClick={() => b(!a)} className='bg-green-500 mx-8 px-5 py-1 rounded-full'>click</button>
           {/* changing data after recieving data / b(!a) false ka ulta krdo true and true ka ulta false */}
    </div>
  )
}

export default Products