import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodolist from './AddTodolist';

function Todo() {

   const [todos, SetTodos] =  useState([
        {id: 1,
            todo: "Achete du Lait" 
        },
        {id: 2,
            todo: "Achete du pain" 
        },
        {id: 3,
            todo: "Achete du Burger" 
        }
    ]);
    
    const Mytodo = todos.map( todo =>{
  
        return(
            <li  key={todos.id} className='list-group-item'> {todo.todo}</li>
        )
    });

  return (
    <div>
        <h1 className='text-center'> {todos.length} To-Do</h1>

        <ul className='text-center'>
           {Mytodo}
        </ul>
        <AddTodolist/>
    </div>
  )
}

export default Todo