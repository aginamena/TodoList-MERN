import React from "react";
import "../styles/TodoItem.scss";

export default function TodoItem(props) {
    return (
        <div className="todos">
            <i className="far fa-circle fa-lg todoCheckbox" />
            <span className="todosName">{props.name} </span>
            <i className="fas fa-times fa-lg deleteTodo"></i>
        </div>
    )
}