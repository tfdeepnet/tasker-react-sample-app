import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import "./assets/styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      desc: "Learn react",
      id: 1,
      date: "2022-01-03 12:00:00",
      complete: false,
    },
    {
      desc: "Learn piano",
      id: 2,
      date: "2022-01-05 12:00:00",
      complete: false,
    },
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const onSaveTask = (desc, date) => {
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;
