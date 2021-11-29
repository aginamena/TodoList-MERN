import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { useState } from 'react';
import Todos from './components/Todos';


function App() {
  const [todos, setTodos] = useState([]);
  const [background, setBackground] = useState("sun");

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
      <Todos listOfTodos={todos} />
    </div>
  );
}

export default App;
