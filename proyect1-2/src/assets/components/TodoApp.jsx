import React from "react";
import { Todo } from "./Todo";
import { useState } from "react";
import './TodoApp.css';

export function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      id: crypto.randomUUID(),
      title: title,
      complete: false,
    };

    const temp = [...todos]
    temp.unshift(newTodos)
    setTodos(temp)

    setTitle("")
  };

  function deleted(todoId){
   setTodos(todos.filter((item)=>item.id !== todoId))
  }


  function onUpdate(id,value){
    const temp =[...todos];
    const item = temp.find(item => item.id == id);
    item.title = value;
    setTodos(temp);
  }


  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="todoInput"
          value={title}
          autoFocus
        />
        <button className="botomCreate">Crear</button>
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo deleted={deleted} key={item.id} item={item} onUpdate={onUpdate} className="todo" />
        ))}
      </div>
    </div>
  );
}
