import { DELETE_TASK ,ADD_TASK,IS_DONE,UPDATE_TASK} from "./actiontype";



const init = {

    tasks : [

        {id:Math.random(), task :'learn React', isDone:false },
        {id:Math.random(), task :'learn Redux', isDone:false },
        {id:Math.random(), task :'learn Node js', isDone:false },
       
       
    ],
};

const reducers =(state = init , {type,payload})=>{

  switch (type) {
    case DELETE_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((e)=>e.id !== payload ),

  };
  case ADD_TASK : 
  return {

    ...state,
    tasks:[...state.tasks,payload]

  };
  case IS_DONE :
    return {

      ...state,
      tasks:state.tasks.map((e)=> e.id === payload? {...e,isDone: !e.isDone} :e),
    };
    case UPDATE_TASK :
      return {
  
        ...state,
        tasks:state.tasks.map((e)=> e.id === payload.id? {...e,task:payload.task} :e),
      }
        
  
    default:
        return state;
  }

};
export default reducers;