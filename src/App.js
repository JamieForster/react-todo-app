import React from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';
import { useState } from "react"

function App() {

  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Example Task',
            day: 'Nov 16th at 2:00pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Birthday Task',
            day: 'Oct 16th at 1:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'My Task',
            day: 'Jan 1st at 12:00am',
            reminder: false,
        },
    ]
);

const createTask = (task) => {
  const id = tasks.length + 1;
  setTasks([...tasks, {id, ...task}]);
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

const toggleAddTask = () => {
  setAddTaskOpen(!addTaskOpen)
}

  return (
    <div className="container">
      <Header title='TODO: Task App' onClick={toggleAddTask} addTaskOpen={addTaskOpen} />
      {addTaskOpen && <AddTask onAdd={createTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'You Have No Tasks!'}
    </div>
  );
}

export default App;
