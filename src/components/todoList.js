import React from 'react';
import Todo from './todo';

function TodoList(props) {
    console.log('todoList.jsのprops', props.todos);
    return(
        <ul>
            {props.todos.map((todo, index) => <Todo key={index} title={todo.title} message={todo.message} deadline={todo.deadline}/>)}
        </ul>
    )
}

export default TodoList;