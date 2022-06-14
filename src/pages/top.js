import { useState, useContext } from 'react';
import TodoList from '../components/todoList';
import TodoForm from '../components/todoForm';
import { Link } from "react-router-dom";
import SettingContext from '../contexts/setting';

function Top() {
  const { state } = useContext(SettingContext);

  const [todos, setTodo] = useState([
      {
        id: '1',
        title: 'トイレットペーパー',
        message: '残り1ロール!?',
        deadline: '2022/5/31'
      },
      {
        id: '2',
        title: '社内ブログ',
        message: 'やばい、社内ブログ書いてない。。。',
        deadline: '2022/5/31'
      }
    ]);

  function draftToTodos(todoDraft) {
    console.log('draftToTodos', todoDraft);
    setTodo([...todos,todoDraft]);
  }

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
