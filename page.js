"use client"
import React, { useState } from 'react'


function page () {
  const [color,setColor] = useState("olive")
  return (
  
    
   <div className='w-full h-screen duration-200'
   style={{backgroundColor: color}}
   >
   <div className='fixed flex wrap justify center bottom-12 inset-x-0 px-2'>
   <div className='flex flex-wrap jutify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-xl'>
   <button onClick={()=>setColor("red")}
    className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"red"}}
    >Red</button>
    <button onClick={()=>setColor("green")}
    className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"green"}}
    >Greeen</button>
    <button onClick={()=>setColor("yellow")}
     className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"Yellow"}}
    >Yellow</button>
    <button onClick={()=>setColor("Blue")}
     className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"blue"}}
    >Blue</button>
    <button onClick={()=>setColor("black")}
     className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"black"}}
    >Black</button>
    <button onClick={()=>setColor("grey")}
     className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"grey"}}
    >Grey</button>
    <button onClick={()=>setColor("white")}
     className='outline-none px-4 py-1 rounded-full   text-white-shadow-lg'
   style={{backgroundColor:"white"}}
    >white</button>
      </div>
    </div>
   </div>

    
  )
}

export default page