import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../../features/taskWizSlice';
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';

const TaskWiz = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (input) {
      dispatch(addTask({ id: Date.now(), text: input }));
      setInput('');
    }
  };

  function handleDeleteTodo(id) {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full flex-grow bg-indigo-400">
      <div className="w-11/12 md:w-1/2 bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6"
        >
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center mb-2"
            >
              <span>{todo.text}</span>
              <FaTrash
                className="text-red-500 cursor-pointer"
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TaskWiz;
