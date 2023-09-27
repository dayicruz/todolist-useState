import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoItem = ({todo}) => {

const {removeTodo,onToggleTodo } = useContext(TodoContext)
  return (
    
    <li className='listaTodo-li'  >
      <span className={` ${(todo.done) ? 'todo-filled' : ''} `} onClick={() => onToggleTodo(todo.id)} >{todo.description}</span>
      <button onClick={() => removeTodo(todo.id)} className='listaTodo-li--button'>Delete</button>
    </li>
  
  )
} 