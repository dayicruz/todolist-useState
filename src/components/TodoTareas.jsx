import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import './TodoTareas.scss'
export const TodoTareas = () => {
  
  const {todos} = useContext(TodoContext)
  
  const isComplet = todos.filter(todo => !todo.done).length
  
  return (
    <>
        <p className='titleList'>Tareas : {todos.length}</p>
        <p className='titleList'>Por completar : {isComplet} </p>
        <hr />
    </>
  )
}
