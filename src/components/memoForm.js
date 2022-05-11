import React from 'react';
import Input from './input';
import Textarea from './textarea';
import Button from './button';
import {useState} from 'react';
import styles from '../styles/memoForm.module.scss';

function Memoform(props) {
    
    const [draft, setDraft] = useState({});
    function titleChange(e) {
        console.log('titleChange', e.target.value);
        setDraft({
            ...draft,
            title:e.target.value
        });
    }
    function messageChange(e) {
        console.log('messageChange', e.target.value);
        setDraft({
            ...draft,
            message:e.target.value
        });
    }
    function deadlineChange(e) {
        console.log('deadlineChange', e.target.value);
        setDraft({
            ...draft,
            deadline:e.target.value
        });
    }

    function memoSubmit() {
        console.log('memoSubmit', draft);
        props.submitButtonClickHandler(draft);
        setDraft({});
    }
    return(
        <div className={styles.memoFormWrap}>
            <Input onChangeHandler={titleChange} placeholder="タイトル" value={draft.title || ""}></Input>
            <Textarea onChangeHandler={messageChange} placeholder="本文" value={draft.message || ""}></Textarea>
            <Input onChangeHandler={deadlineChange} placeholder="締め切り" value={draft.deadline || ""}></Input>
            <Button onClickHandler={memoSubmit}>メモを登録する</Button>
        </div>
    )
}

export default Memoform;