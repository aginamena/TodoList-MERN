import React from 'react'
import "../styles/Todos.scss";
import TodoItem from './TodoItem';


function Todos(props) {
    return (
        <div id="todos">
            {
                props.listOfTodos ? props.listOfTodos.map(todo =>
                    <TodoItem name={todo.name} key={todo.id} id={todo.id} />
                ) : <div>Empty list</div>
            }
        </div>
    )
}

export default Todos
