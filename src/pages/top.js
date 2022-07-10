import { useState, useContext, useEffect } from 'react';
import TodoList from '../components/todoList';
import TodoForm from '../components/todoForm';
import { Link } from "react-router-dom";
import SettingContext from '../contexts/setting';
import getTodos from '../api/getTodos';

function Top() {
  const { state } = useContext(SettingContext);
  const [todos, setTodo] = useState([]);

  async function fetchData() {
    const todos = await getTodos();
    setTodo(todos);
  };

  function draftToTodos(todoDraft) {
    console.log('draftToTodos', todoDraft);
    setTodo([...todos,todoDraft]);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div style={{ padding: '20px', backgroundColor: state.backgroundColor}}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>To Do App</h1>
      <Link to="setting">設定画面</Link>
      <TodoForm submitButtonClickHandler={draftToTodos}/>
      <TodoList todos={todos} />
    </div>
  );
}


export default Top;
