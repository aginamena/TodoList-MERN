import React, { useState } from "react";
import "../styles/Header.scss";
import axios from 'axios';
import queryString from 'query-string';

export default function Header(props) {
    const [todos, setTodos] = useState([]);
    async function handleSubmit(event) {
        event.preventDefault();
        const inputValue = document.querySelector("#newTodoItem").value;
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: inputValue })
        }
        const response = await fetch("http://localhost:4000/Todo/add", options);
        const data = await response.json();
        const newDate = [...todos, data];
        setTodos(newDate);
        props.setNewTodos(newDate);
    }
    return (
        <header
            style={props.currentBackground === "sun" ? { backgroundImage: "url(./images/bg-desktop-light.jpg)" } :
                { backgroundImage: "url(./images/bg-desktop-dark.jpg)" }}
            id="headerCmp">
            <div>
                <div id="headerTopCmp">
                    <div>TODO</div>
                    {
                        props.currentBackground === "sun" ?

                            <img src="./images/icon-moon.svg"
                                alt="moon"
                                onClick={() => props.changeBackground(props.currentBackground === "sun" ? "moon" : "sun")}
                            />
                            :
                            <img src="./images/icon-sun.svg"
                                alt="sun"
                                onClick={() => props.changeBackground(props.currentBackground === "sun" ? "moon" : "sun")}
                            />

                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <div id="headerbottomCmp"
                        style={props.currentBackground === "sun" ? { backgroundColor: "white" } :
                            { backgroundColor: "#25273D" }}
                    >
                        <button type="submit"><i className="fas fa-plus fa-2x search-icon" style={props.currentBackground === "sun" ?
                            { color: "black" } : { color: "#C8CBE7" }}></i></button>
                        <input type="text" placeholder="Create a new todo..."
                            style={props.currentBackground === "sun" ?
                                { backgroundColor: "white", color: "#494C6B" } :
                                { backgroundColor: "#25273D", color: "#C8CBE7" }}
                            name="newTodoItem" id="newTodoItem"
                        />
                    </div>
                </form>
            </div>
        </header>
    )
}