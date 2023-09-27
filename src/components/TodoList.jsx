import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoItem } from './TodoItem'
import './TodoList.scss'

export const TodoList = () => {

 const {todos} = useContext(TodoContext);
 
  return (
    <ul className='listaTodo'>
        {
          todos.map( todo =>( 
            <TodoItem key={ todo.id } todo={todo}/>
          ))
        }
    </ul>
  )
}
