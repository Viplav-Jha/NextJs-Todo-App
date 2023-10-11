import { todo } from "node:test";
import { ITask } from "../../types/types"

const baseUrl ='http://localhost:3001'

export const getAllTodo = async ():Promise<ITask>=>{

  const res = await fetch(`${baseUrl}/tasks ,`,{ cache: 'force-cache' })
  const todos = await res.json();
  return todos;
}

export const AddTodo = async (todo:ITask):Promise<ITask>=>{
    const res = await fetch(`${baseUrl}/tasks`,{
     method:"POST",
       headers:{
           'Content-Type':'application/json'
       } ,
       body:JSON.stringify(todo)  
    })
    const newTodos =await res.json()
     return newTodos
}