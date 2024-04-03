import React from "react";

function TaskCard({ toDoList, deleteFunction }) {
  return (
    <div className="bg-red-400  w-[500px] h-[300px] rounded overflow-y-scroll ">
      <h1 className="text-center font-bold m-4 text-xl">Your Tasks</h1>
      {toDoList.map((x, index) => {
        return (
          <div
            className="flex justify-between items-center m-4 bg-orange-300 border border-black p-2 rounded-md"
            key={index}
          >
            <h1 className="font-bold">{x}</h1>
            <button
              className="bg-red-400 p-2 rounded-md font-semibold"
              onClick={() => {
                deleteFunction(index);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskCard;
