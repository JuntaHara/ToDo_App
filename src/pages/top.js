import { useState } from 'react';
import MemoList from '../components/memoList';
import MemoForm from '../components/memoForm';
import { Link } from "react-router-dom";

function Top() {

  const [memos, setMemo] = useState([
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

  function draftToMemos(memoDraft) {
    console.log('draftToMemos', memoDraft);
    setMemo([...memos,memoDraft]);
  }

  return (
    <div style={{ padding: '20px'}}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>To Do App</h1>
      <Link to="setting">設定画面</Link>
      <MemoForm submitButtonClickHandler={draftToMemos}/>
      <MemoList memos={memos} />
    </div>
  );
}


export default Top;
