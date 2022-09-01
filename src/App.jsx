import './App.css'
import React, { useCallback, useEffect, useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoContext, TodoProvider } from './TodoContext';

// const defaultItem = [
//    { text: 'Cortar Cebolla', completed: true },
//    { text: 'Tomar el curso de Intro a React', completed: true },
//    { text: 'Llorar con la Llorona', completed: false }
//  ]



export default function App() {

  return (
    <>
<TodoProvider>
<TodoCounter  />
      <TodoSearch/>
     
     <TodoContext.Consumer>
     {({error, loading, searchedTodos, completeTodo, deleteTodo}) => {
          return(
            <TodoList
        loading={loading}
        error={error}>

        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
          )
     }}

     </TodoContext.Consumer>

      <CreateTodoButton />
</TodoProvider>
   
    </>
  )
}

