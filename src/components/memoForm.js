import React from 'react';
import Input from './input';
import Textarea from './textarea';
import Button from './button';
import {useState} from 'react';

function Memoform(props) {
    
    const [draft, setDraft] = useState({});
    function titleChange(e) {
        console.log('titleChange', e.target.value);
        setDraft({title:e.target.value});
    }
    function messageChange(e) {
        console.log('messageChange', e.target.value);
        setDraft({message:e.target.value});
    }

    function memoSubmit() {
        console.log('memoSubmit', draft);
        props.submitButtonClickHandler(draft);
    }
    return(
        <div>
            <Input onChangeHandler={titleChange} placeholder="タイトル" value={draft.title}></Input>
            <Textarea onChangeHandler={messageChange} placeholder="本文" value={draft.message}></Textarea>
            <Button onClickHandler={memoSubmit}>淳太</Button>
        </div>
    )
}

export default Memoform;