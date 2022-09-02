import './App.css'
import React, { useCallback, useEffect, useState } from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import { TodoForm } from './components/TodoForm';
import { Modal } from './components/Modal';
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
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
          {({ error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal }) => {
            return (
              <>
                <TodoList
                  loading={loading}
                  error={error}>

                  {error && <p>Oopss, it was an error...</p>}
                  {loading && <p>Loading, please wait...</p>}
                  {(!loading && !searchedTodos.length) && <p>¡Create your First Task!</p>}

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

                {!!openModal && (
                  <Modal>
                    <TodoForm />
                  </Modal>
                )}

                <CreateTodoButton setOpenModal={setOpenModal} />
              </>
            )
          }}


        </TodoContext.Consumer>



      </TodoProvider>


    </>
  )
}

