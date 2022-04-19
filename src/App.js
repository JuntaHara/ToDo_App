import { useState } from 'react';
import MemoList from './components/memoList';
import MemoForm from './components/memoForm';

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

  function draftToMemos(memoDraft) {
    console.log('draftToMemos', memoDraft);
    setMemo([...memos,memoDraft]);
  }

  return (
    <div>
      <h1>To Do</h1>
      <MemoForm submitButtonClickHandler={draftToMemos}/>
      <MemoList memos={memos} />
    </div>
  );
}


export default App;
