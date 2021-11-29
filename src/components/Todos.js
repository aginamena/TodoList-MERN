import React from 'react'
import "../styles/Todos.scss";
import TodoItem from './TodoItem';


function Todos(props) {
    return (
        <div id="todos">
            <div id="todosList">
                {
                    props.listOfTodos ? props.listOfTodos.map(todo =>
                        <TodoItem name={todo.name} key={todo.id} id={todo.id} />
                    ) : <div>Empty list</div>
                }
            </div>
            <div id="todoButtons">
                <small>0 items left</small>
                <small>All</small>
                <small>Active</small>
                <small>Completed</small>
                <small>Clear Completed</small>
            </div>
        </div>
    )
}

export default Todos
