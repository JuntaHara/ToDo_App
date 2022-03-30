import React, {useState} from 'react';
import Memo from './memo';

function MemoList(props) {
    return(
        <ul>
            {props.memos.map((memo, index) => <Memo key={index} title={memo.title} message={memo.message}/>)}
        </ul>
    )
}

export default MemoList;