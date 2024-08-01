import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li style={{color:"black"}}>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
