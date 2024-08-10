import React from "react";

const Form = () => {
  return (
    <div>
      <form className="mb-4 font-primary w-full">
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
          placeholder="Add a task"
        />
        <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;