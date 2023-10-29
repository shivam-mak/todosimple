"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler= (e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}])
     setitle("")
     setdesc("")
     console.log(maintask);



  }
  const deleteHandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }
  const completeHandler = (i) => {
    let copytask = [...maintask];
    copytask[i].completed = true;
    setmaintask(copytask);
  };
  let renderTask=<h2> No Task Available</h2>
  if(maintask.length>0){
  renderTask=maintask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-1/4'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'> Delete</button>
        {!t.completed && (
          <button onClick={() => completeHandler(i)} className='bg-green-400 text-white px-4 py-2 rounded font-bold'>
            Complete
          </button>
        )}
      </li>

    );

  });
}
  return (
    <>   
    <h1 className='bg-black text-zinc-100 p-5 text-4xl font-bold text-center'>MY TODO LIST</h1>          
    <form onSubmit={submithandler}>
      <input type="text"
      className="text-2xl border-zinc-800 border-4
      m-4 px-4 py-2"
      placeholder="Your Task"
      value={title}
      onChange={(e)=>{
        setitle(e.target.value)

      }}/>
       <input type="text"
      className="text-2xl border-zinc-800 border-4
      m-4 px-4 py-2"
      placeholder="Description here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)

      }}/>
      <button className='bg-black 
      text-2xl text-white px-4 py-3  '> Add Task</button>
      
      

    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    
    </>
    
  )
}

export default page