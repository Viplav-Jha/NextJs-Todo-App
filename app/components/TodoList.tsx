import { ITask } from '@/types/types';
import React from 'react';
import Task from './Task';

interface TodoListProps {
  tasks: ITask[]
}



const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id}
              task={task}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
