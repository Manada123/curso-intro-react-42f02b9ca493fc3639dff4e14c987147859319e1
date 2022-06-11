import React from 'react';
import { TodoContext } from '../TodoContext';
import  './ToDoForm.css';
function Todoform(){

const [newTodoValue,setNewTodoValue]=React.useState('');

  const {
  addTodo,
  setOpenModal,
  }=React.useContext(TodoContext);

const onCancel =()=>{

    setOpenModal(false);
}
const onChange =(event)=>{  
    setNewTodoValue(event.target.value);
   };
const onSubmit =(event)=>{
    event.preventDefault();
 addTodo(newTodoValue);
};
    return(
        <form onSubmit={onSubmit}>
        <label>...</label>

        <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder='letras'/>
 
     <div>
     <button
     type='button'
     onClick={onCancel}
     
     
     
     >cancelar</button>
     <button
     type='submit'
     >
         Añadir
     </button>


     </div>
        </form>
    );
}

export {Todoform}