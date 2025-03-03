import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id, text) => {
    setEditing(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditing(null);
    setEditText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 text-white">
      <h1 className="text-4xl font-bold mb-4">Interactive Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          className="p-2 border rounded text-black"
        />
        <motion.button 
          onClick={addTodo} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add
        </motion.button>
      </div>
      <ul className="w-full max-w-md">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex justify-between items-center bg-white p-2 my-2 shadow rounded ${
                todo.completed ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {editing === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-1"
                />
              ) : (
                <span>{todo.text}</span>
              )}
              <div className="flex gap-2">
                {editing === todo.id ? (
                  <motion.button 
                    onClick={() => saveEdit(todo.id)} 
                    className="text-green-500"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaCheck />
                  </motion.button>
                ) : (
                  <>
                    <motion.button 
                      onClick={() => toggleComplete(todo.id)} 
                      className="text-blue-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaCheck />
                    </motion.button>
                    <motion.button 
                      onClick={() => startEditing(todo.id, todo.text)} 
                      className="text-yellow-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button 
                      onClick={() => deleteTodo(todo.id)} 
                      className="text-red-500"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaTrash />
                    </motion.button>
                  </>
                )}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoApp;
