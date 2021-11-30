import React from "react";
import "../styles/TodoItem.scss";

export default function TodoItem(props) {
    async function markTodoAsComplete(event) {
        // marking the todo as completed in the front end
        const clickedCheckbox = event.target;
        let todoName = null;
        if (clickedCheckbox.classList.contains("todoCheckbox")) {
            clickedCheckbox.cssText = "background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)), color:"
            todoName = clickedCheckbox.nextSibling;
        } else {
            clickedCheckbox.style = "display : block";
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
        todoName.style = "text-decoration-line: line-through; color: #D1D2DA;";

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
        //deleting from the frontend 
        props.sendId(todoId);
    }
    return (
        <div className="todos"
            style={props.background === "sun" ? { borderBottom: "1px solid #E3E4F1" } :
                { borderBottom: "1px solid #393A4B" }}
        >
            <i className="far fa-circle fa-lg todoCheckbox" onClick={markTodoAsComplete}
                style={props.completed ? { background: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" }
                    : {}}
            >
                <img className="checkMark"
                    src="./images/icon-check.svg" alt="check icon"
                    style={props.completed ? { display: "block" } : { display: "none" }}
                />
            </i>
            <span className="todosName" id={props.id}

                style={props.completed ? (props.background === "sun" ?
                    { textDecorationLine: "line-through", color: "#D1D2DA" } :
                    { textDecorationLine: "line-through", color: "#4D5067" }) :
                    (props.background === "sun" ? { color: "#494C6B" } : { color: "#C8CBE7" })
                }
            >{props.name} </span>
            <i className="fas fa-times fa-lg deleteTodo" onClick={deleteTodo}
                style={props.background === "sun" ? { color: "#494C6B" } : { color: "#5B5E7E" }}
            ></i>
        </div>
    )
}