import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: Date.now() }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const deploymentTasks = [
    'Deployed on aws😄',
    'Deployed with docker image😄😎😎😎',
    'Pulling Updates and Restarting😄 is working😝😝😝',
    'Pulling Updates and Restarting😄😝 the docker container😝😝',
    'Trying CI/CD with Jenkins hopefully. it will work🙏🙏🙏',
    'Integrating CircleCI.....deployment not working, testing over aws ec2 instance',
    "First CI/CD pipeline setup done😛😛😛😛 🤟🤟🤟🤟🤟🤟🤟😝😝😝😝😝😝😝😝🤟🤟🤟🤟🤟🤟🤟",
    "After first depyloyment: stop/delete current running container😛------->push the chagnes to repo to main/delvelop branch----->repeat🤟🤟🤟🤟😝😝",
    "Stop and Remove the Existing Docker Container making it totally automated🤟",
    "Testing: Making it totally automated🤟date:17-Aug-2024",
  ];
  return (
    <div className="App">
      <h1 style={{color:"black"}}>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />

      <ul style={{ color: 'black' }}>
        {deploymentTasks.map((task, index) => (
          <li key={index}>{`${index + 1}. ${task}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
