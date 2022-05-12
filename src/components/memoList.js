import React from 'react';
import Memo from './memo';

function MemoList(props) {
    console.log('memoList.jsのprops', props.memos);
    return(
        <ul>
            {props.memos.map((memo, index) => <Memo key={index} title={memo.title} message={memo.message} deadline={memo.deadline}/>)}
        </ul>
    )
}

export default MemoList;