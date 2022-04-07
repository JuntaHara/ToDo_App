import React from 'react';

function Textarea(props) {
    return(
        <textarea onChange={props.onChangeHandler} placeholder={props.placeholder} value={props.value}></textarea>
    )
}

export default Textarea;