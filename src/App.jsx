import './App.css'
import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';

const todos =[
  {text:'Cortar Cebolla', completed: true},
  {text:'Tomar el curso de Intro a React', completed: false},
  {text:'Llorar con la Llorona', completed: false}
]

export default function App() {
  return (
    <>
     <TodoCounter />
      <TodoSearch />
     <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />      
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  )
}
