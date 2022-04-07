import React from 'react';

function Input(props) {
    return(
        <input onChange={props.onChangeHandler} placeholder={props.placeholder} value={props.value}></input>
    )
}

export default Input;