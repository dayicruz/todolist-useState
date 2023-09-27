import { TodoProvider } from '../context/TodoProvider';
import './App.scss';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoTareas } from './TodoTareas';


function App() {

  return (
  
    <TodoProvider>

        <h1>Todo List</h1>
        <TodoForm/>
        <TodoTareas/>
        <TodoList/>
        
    </TodoProvider>
   
  
    
  )
}

export default App
