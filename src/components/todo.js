import React from 'react';
import styles from '../styles/todo.module.scss';

function Todo(props) {
  return(
    <li className={styles.todoWrap}>
      <h3 className={styles.todoTitle}>{props.title}</h3>
      <p className={styles.todoMessage}>{props.message}</p>
      <p className={styles.todoDeadline}>締め切り：{props.deadline}</p>
    </li>
  );
}

export default Todo;