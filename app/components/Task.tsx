import { ITask } from '@/types/types'
import React from 'react'

interface TasksProps {
   task:ITask
}
const Task:React.FC<TasksProps>= ({task}) => {
  return (
   
         <tr key={task.id}>
              <td>{task.text}</td>
              <td>Blue</td> 
            </tr>
   
  )
}

export default Task