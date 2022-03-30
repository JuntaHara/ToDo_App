import React, {useState} from 'react';
import styles from '../styles/memo.module.scss';

function Memo(props) {
    return(
        <li className={styles.memoWrap}>
            <h3 className={styles.memoTitle}>{props.title}</h3>
            <p className={styles.memoMessage}>{props.message}</p>
        </li>
    )
}

export default Memo;