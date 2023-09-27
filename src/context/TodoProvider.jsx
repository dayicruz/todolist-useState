import React, { useReducer, useState } from 'react';
import { todoReducer } from '../components/todoReducer';
import { TodoContext } from './TodoContext';


const initialState = []

export const TodoProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [ taskDescription, setTaskDescription ] = useState("");

  const handleNewTodo = (todo) =>{
    dispatch({
      type: 'add todo',
      payload: todo
    })
  }

  const removeTodo = (todo) => {
  
    dispatch({
      type: 'remove todo',
      payload: todo
    })
  }
 
  const onInputChange = (event) => {
    setTaskDescription(
      event.target.value
    )
  }

  const onToggleTodo = (todo) => {
    dispatch({
      type: 'toggle todo',
      payload: todo
    })
  }

  const dayana = {
    todos,
    taskDescription,
    handleNewTodo,
    removeTodo,
    onInputChange,
    onToggleTodo,
   
    
   
  }
  
  return (
    <TodoContext.Provider value={dayana}>
        { children }
    </TodoContext.Provider>
  )
}
