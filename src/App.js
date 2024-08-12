import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('low');

  function handleAddButton(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      // Only add the task if the trimmed input has content
      setTasks([...tasks, { description: inputValue.trim(), priority }]);
      setInputValue(''); // Clear the input after adding
    }
  }

  function handleDeleteButton(key) {
    const newTasks = tasks.filter((_, index) => index !== key);
    setTasks(newTasks);
  }

  function getPriorityClass(priority) {
    if (priority === 'low') {
      return 'low-priority';
    } else if (priority === 'medium') {
      return 'medium-priority';
    } else {
      return 'high-priority';
    }
  }

  return (
    <div className="App">
      <div className='input-div'>
        <input
          className='task-input'
          placeholder='Type task here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddButton}>
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available. Add a task to get started!</p>
        ) : (
          tasks.map((task, key) => (
            <li className={getPriorityClass(task.priority)} key={key}>
              <p className='text-break'>{task.description}</p>
              <button onClick={() => handleDeleteButton(key)}>Delete</button>
            </li>
          ))
        )}
      </ul>
      <button className="reset-button" onClick={() => setTasks([])}>Reset</button>
    </div>
  );
}

export default App;
