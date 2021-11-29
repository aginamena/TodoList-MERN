import React, { useState } from "react";
import "../styles/Header.scss";
export default function Header(props) {
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
                <form onSubmit={event => props.handleSubmit(event)}>
                    <div id="headerbottomCmp"
                        style={props.currentBackground === "sun" ? { backgroundColor: "white" } :
                            { backgroundColor: "#25273D" }}
                    >
                        <button type="submit"
                            style={props.currentBackground === "sun" ? { backgroundColor: "white" }
                                : { backgroundColor: "rgb(37, 39, 61)" }}
                        ><i className="fas fa-plus fa-2x search-icon" style={props.currentBackground === "sun" ?
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