import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import './TodoForm.scss';



export const TodoForm = () => {

  const {handleNewTodo,onInputChange, taskDescription} = useContext( TodoContext)


  const onFormSubmit = (event) =>{
    event.preventDefault()
   
     const newTodo = {
      description: taskDescription,
      id:new Date().getTime() ,
      done : false
    }
    handleNewTodo(newTodo)
   
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text"
        placeholder='Agrega tu tarea'
        className='form-input'
        name='description'
        onChange={onInputChange}
        value={taskDescription}
       
      
      />
      <button  className='form-button' type='submit'>Add</button>
     </form>
  )
}
