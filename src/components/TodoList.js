import React from 'react';

const TodoList = props =>
   <ul>
     {props.list.map(element =>  (<li key={element.id} id={element.id} onClick={props.removeTodo}>
     
     {`${element.text}`}</li>))} 
   </ul>
export default TodoList;