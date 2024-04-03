import logo from "./logo.svg";
import "./App.css";
import TaskCard from "./components/TaskCard";

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todo, setToDo] = useState([]);

  // const clickHandler = (e) => {

  // };

  const deleteHandler = (indexValueToDelete) => {
    const newToDo = todo.filter((x, index) => index !== indexValueToDelete);
    setToDo(newToDo);
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-40">
      <div className="card w-[500px] h-[300px] bg-orange-300 flex flex-col justify-center items-center rounded-md ">
        <h1 className="font-bold my-4 text-xl">कार्यसूची (To-Do-App)</h1>
        <input
          className="w-96 border border-black p-2 rounded-lg"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <div className="">
          <button
            className="m-4 p-2 font-bold bg-red-300 rounded-lg hover:bg-red-400 border border-black"
            onClick={() => {
              if (task.trim() !== "") {
                const tasks = [...todo, task];
                setToDo(tasks);
                setTask("");
              }
            }}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="flex gap-2 ">
        <TaskCard toDoList={todo} deleteFunction={deleteHandler} />
      </div>
    </div>
  );
}

export default App;
