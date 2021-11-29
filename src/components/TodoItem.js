import React from "react";
import "../styles/TodoItem.scss";

export default function TodoItem(props) {
    async function markTodoAsComplete(event) {
        // marking the todo as completed in the front end
        const clickedCheckbox = event.target;
        let todoName = null;
        if (clickedCheckbox.classList.contains("todoCheckbox")) {
            clickedCheckbox.style = "background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
            todoName = clickedCheckbox.nextSibling;
        } else {
            clickedCheckbox.parentElement.style = "background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
            todoName = clickedCheckbox.parentElement.nextSibling;
        }

        //we also want to mark the todo as complete in the backend
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const todoId = todoName.getAttribute('id');
        const response = await fetch("http://localhost:4000/Todo/" + todoId, options);

    }
    async function deleteTodo(event) {
        //we want to delete from backend first before front end
        const todoName = event.target.previousSibling;
        const todoId = todoName.getAttribute('id');
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch("http://localhost:4000/Todo/" + todoId, options);
    }
    return (
        <div className="todos">
            {/* <span className="todoCheckbox">sdf</span> */}
            <i className="far fa-circle fa-lg todoCheckbox" onClick={markTodoAsComplete}>
                <img className="checkMark" src="./images/icon-check.svg" alt="check icon" />
            </i>
            <span className="todosName" id={props.id}>{props.name} </span>
            <i className="fas fa-times fa-lg deleteTodo" onClick={deleteTodo}></i>
        </div>
    )
}