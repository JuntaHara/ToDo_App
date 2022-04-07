import React from 'react';

function Button(props) {
    return(
        <button onClick={props.onClickHandler}></button>
    )
}

export default Button;