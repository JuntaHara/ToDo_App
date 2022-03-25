import React, {useState} from 'react';
import { styled } from '@mui/system';

const MyComponent=styled('div')({
    backgroundColor: 'red',
})

function EssayInputFunction(props) {
    return(
        <MyComponent> 
            <p style={{ color:props.disabled ? 'red' : 'black'}}>{props.massage}</p>
            <p>{props.value}</p>
            <input disabled={props.disabled} onChange={props.onChangeHandler}></input>
        </MyComponent>
    )
}

export default EssayInputFunction;