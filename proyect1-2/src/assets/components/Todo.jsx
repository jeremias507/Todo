import React, { useState } from "react";

export function Todo({ item, deleted, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit(e){
        e.preventDefault();
        onUpdate(item.id, newValue);
        setIsEdit(false)
    }
   
    return (
      <form onSubmit={handleSubmit} className="todoUpdateForm">
        <input onChange={(e)=> setNewValue(e.target.value)} type="text" className="todoImput" value={newValue}/>
        <button className="botomActual">Actualizar</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <h1 className="todoTitle">{item.title}</h1>
        <div className="contentInfo">
        <button className="todoInput" onClick={() => setIsEdit(true)}>Editar</button>
        <button className="todoInput" onClick={() => deleted(item.id)}>Eliminar</button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="todo">{isEdit ? <FormEdit/> : <TodoElement/>}</div>
    </>
  );
}
