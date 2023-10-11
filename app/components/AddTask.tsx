
"use client"
import React, { FormEventHandler, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Model from './Model';
import { AddTodo } from '@/public/apis/api';

function AddTask() {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [newTodo, setNewTodo] =useState<string>("")
    const handleSubmit:FormEventHandler<HTMLFormElement>= async(e)=>{
       e.preventDefault()
       await AddTodo({
          "id":"4",
          "text":newTodo
       })
       setNewTodo("")
       setOpenModel(false)
    }
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setOpenModel(true)}
      >
        Add new task
        <AiOutlinePlus className="ml-2" size={20} />
       
      </button>
      <Model openModel={openModel} setOpenModel={setOpenModel} >
       <form onSubmit={handleSubmit}>
        <h3 className='font-bold text-lg'>
          Add Todoes
        </h3>
        <div className='modal-action'>
        <input type="text" placeholder="Type here" value={newTodo}
         className="input input-bordered w-full " onChange={(e)=>setNewTodo(e.target.value)} />
            <button type='submit' className='btn'> Submit</button>
        </div>
       
     
       </form>
      </Model>
        
     
    </div>
  );
}

export default AddTask;
