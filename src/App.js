import './App.css';
import Input from './input';
import { useState } from 'react';
import MemoList from './components/memoList';

function App() {

  const [memos, setMemo] = useState([
      {
        id: '1',
        title: 'トイレットペーパー',
        message: '残り1ロール!?'
      },
      {
        id: '2',
        title: '社内ブログ',
        message: 'やばい、社内ブログ書いてない。。。'
      }
    ]);
  
  return (
    <div className="App">
      <h1>To Do</h1>
      <MemoList memos={memos} />
    </div>
  );
}


export default App;
