import React, { useState } from 'react'
import "../styles/Todos.scss";
import TodoItem from './TodoItem';


function Todos(props) {
    function update(endPoint, method, clickedList) {
        props.getActive(endPoint, method);
        props.currentList(clickedList)
    }
    return (
        <div id="todos"
            style={props.background === "sun" ? { backgroundColor: "white" } : { backgroundColor: "rgb(37, 39, 61)" }}
        >
            <div id="todosList">
                {
                    props.listOfTodos.length >= 1 ? props.listOfTodos.map(todo =>
                        <TodoItem
                            name={todo.name}
                            key={todo.id}
                            id={todo.id}
                            sendId={id => props.sendId(id)}
                            background={props.background}
                            completed={todo.completed} />
                    ) : <img src="./images/illustration-empty.svg"
                        alt="empty-illustration" id="emptyTodoList" />
                }
            </div>
            <div id="todoButtons">
                {
                    props.listOfTodos.length == 0 ? <small className="utils">Empty List</small> :
                        <small className="utils">{props.listOfTodos.length} item(s) left</small>
                }
                <small className="listOfOptions"
                    style={props.currentTodo === "All" ? { color: "#3A7CFD" } : { color: "#9495A5" }}
                    onClick={() => update("", "GET", "All")}
                >All</small>
                <small className="listOfOptions"
                    style={props.currentTodo === "Active" ? { color: "#3A7CFD" } : { color: "#9495A5" }}
                    onClick={() => update("active", "GET", "Active")}
                >Active</small>
                <small className="listOfOptions"
                    style={props.currentTodo === "Completed" ? { color: "#3A7CFD" } : { color: "#9495A5" }}
                    onClick={() => update("completed", "GET", "Completed")}
                >Completed</small>
                <small className="utils"
                    style={props.currentTodo === "Clear-Completed" ? { color: "#3A7CFD" } : { color: "#9495A5" }}
                    onClick={() => update("clearAllCompleted", "DELETE", "Clear-Completed")}>Clear Completed</small>
            </div>
        </div>
    )
}

export default Todos
