import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { useState } from 'react';


function App() {
  const [background, setBackground] = useState("sun");
  return (
    <div className="App"
      style={background == "sun" ? { backgroundColor: "#F2F2F2" } : { backgroundColor: "hsl(235, 21%, 11%)" }}
    >
      <Header
        changeBackground={newBackground => setBackground(newBackground)}
        currentBackground={background}
      />
    </div>
  );
}

export default App;
