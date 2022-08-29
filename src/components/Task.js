import React ,{useState}from 'react'

import { useSelector,useDispatch } from 'react-redux/es/exports';
import { deleteTask ,taskisDone,updatetask} from '../redux/action';
const Task = () => {

    const tasks = useSelector((state) =>state.tasks);
    const[open,setOpen]=useState(false);

    const [data ,setData] =useState("");
    const [id,setId]=useState("");
    const dispatch =useDispatch();
  return (
    <div>
     {open && 
     <>
          <input onChange={((e) => setData(e.target.value))} type='text' defaultValue={data}/>
      <button onClick={()=>dispatch(updatetask(id,data))}>Confirme</button>
      <button  onClick={() => setOpen(false)}>Cancel</button>
     </>
     }
        {tasks.map((el)=>
        
        <>

        <h1 id={el.isDone? "gg" : null}>{el.task}</h1>
        <button onClick={()=>dispatch(deleteTask(el.id))}>Delete Task</button>
        <button onClick={()=>dispatch(taskisDone(el.id))}>Completed</button>
        <button onClick={()=>{ setOpen(true);
        setData(el.task); setId(el.id);}}>Edit</button>
        </>
        )
        }


    </div>
  )
}

export default Task