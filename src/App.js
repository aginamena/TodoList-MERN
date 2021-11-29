import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Todos from './components/Todos';


function App() {
  const [todos, setTodos] = useState([]);
  const [background, setBackground] = useState("sun");
  const [currentList, setCurrentList] = useState("All");
  async function fetchData(endPoint, method) {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch("http://localhost:4000/Todo/" + endPoint, options);
    const data = await response.json();
    const todos = [];
    data.map(todo => {
      const newTodo = {
        id: todo._id,
        name: todo.description,
        completed: todo.isCompleted
      }
      todos.push(newTodo);
    })
    setTodos(todos);
  }
  useEffect(() => fetchData(""), []);

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
    setTodos([...todos, data]);
  }
  function deleteId(id) {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  return (
    <div className="App"
      style={background == "sun" ? { backgroundColor: "#F2F2F2" } : { backgroundColor: "hsl(235, 21%, 11%)" }}
    >
      <Header
        changeBackground={newBackground => setBackground(newBackground)}
        currentBackground={background}
        setNewTodos={newList => setTodos(newList)}
        handleSubmit={event => handleSubmit(event)}
      />
      <Todos listOfTodos={todos}
        sendId={id => deleteId(id)}
        currentList={currentList}
        getActive={(endPoint, method) => fetchData(endPoint, method)}
        currentList={newList => setCurrentList(newList)}
        background={background}
        currentTodo={currentList}
      />
    </div>
  );
}

export default App;
