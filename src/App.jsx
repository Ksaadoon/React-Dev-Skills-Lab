import './App.css';
import ToDoList from './ToDoList';
import { useState } from 'react';
import NewToDoForm from './NewToDoForm';
// functional components
function App() {
  const [todos, setTodos] = useState([
    {'description': 'learn controlled forms', 'owner': 'ryan'}
  ]);
  const [showTodos, setShowTodos] = useState(true);
  const toggleTodos = (e) => {
    setShowTodos(!showTodos)
    // update a showTodos variable to false
  }
  const addTodo = (newToDo) => {
    setTodos([...todos, newToDo])
  }
  return (
    <div className="App">
      <h1>A react app</h1>
      <button onClick={toggleTodos}>
        {showTodos ? "Hide" : "Show"} todos
      </button>
      <br></br>
      { showTodos && <ToDoList todos={todos} /> }
      <br /><br /><br />
      <hr />
      <NewToDoForm addToDo={addTodo}></NewToDoForm>
      <br /><br />
    </div>
  );
}

export default App;
