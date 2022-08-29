import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action';


const AddTask = () => {
    const dispatch=useDispatch();
    const [text,setText]=useState('');
    const handleAdd=(e)=>{
         e.preventDefault();
         const newTask={
         id:Math.random(),
         task:text,
         isDone:false

         };
      dispatch(addTask(newTask));
     
    };
  return (
    <div>
      <form onSubmit={handleAdd}>
      <input type='text' 
        onChange={(e)=> setText(e.target.value)}/>
        <button>ADD TASK</button>

      </form>
    </div>
  )
}

export default AddTask