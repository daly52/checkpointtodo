import { DELETE_TASK ,ADD_TASK, IS_DONE,UPDATE_TASK} from "./actiontype";

export const deleteTask =(id) =>{
    return{
        
    type :DELETE_TASK,
    payload : id,

    }


};
export const addTask =(newTask) =>{
    return{
        
    type :ADD_TASK,
    payload : newTask,

    }


};
export const taskisDone=(id)=>{
return{


type :IS_DONE,
payload:id,


};


};



export const updatetask=(id,task)=>{
    return{
    
    
    type :UPDATE_TASK,
    payload:{
        task: task,
        id:id,
    },
    
    
    };
    
    
    };