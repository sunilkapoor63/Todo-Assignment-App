import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <div className="user-info">
          <img src="https://via.placeholder.com/50" alt="User" />
          <span>Hey, ABCD</span>
        </div>
        <nav>
          <ul>
            <li>All Tasks</li>
            <li>Today</li>
            <li>Important</li>
            <li>Planned</li>
            <li>Assigned to me</li>
          </ul>
        </nav>
        <div className="theme-toggler">
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>To-Do List</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
        <TaskInput />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
