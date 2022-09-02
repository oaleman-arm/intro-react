import React from 'react';
import { useContext } from 'react';
import '../css/TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} tasks</h2>
  );
}

export default TodoCounter;