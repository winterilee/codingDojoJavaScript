import React, {useState} from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoDisplay from './components/TodoDisplay';

function App() {

  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (newTodo) => {setTodoList([...todoList, newTodo])};

  const deleteTodo = (selectedTodo) => {
    const remainingTodos = todoList.filter((todo)=> {
      return todo.task !== selectedTodo;
    });
    setTodoList(remainingTodos);
  };

  const checkTodo = (checkedTodo) => {
    let updatedTodos = todoList.map((todo) => {
      if(todo === checkedTodo) {
        let sampleTodo = {...todo};
        sampleTodo.isChecked = !sampleTodo.isChecked;
        return sampleTodo;
      } else{
        return todo;
      }
    })
    setTodoList(updatedTodos);
  }

  return (
    <div>
      <h3>Todo</h3>
      <TodoCreate addNewTodo={addNewTodo} />
      <TodoDisplay todoList={todoList} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  )
}

export default App
