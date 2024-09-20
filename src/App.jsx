import React, { useState } from 'react';
import Input from './Input';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (updatedTodo) => {
        const newTodos = todos.map((todo, index) =>
            index === todos.indexOf(currentTodo) ? updatedTodo : todo
        );
        setTodos(newTodos);
        setCurrentTodo('');
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const deleteAllTodos = () => {
        if (todos.length === 0) {
            alert('No tasks to delete! Please add a task first.');
        } else if (window.confirm('Are you sure you want to delete all tasks?')) {
            setTodos([]);
        }
    };

    return (
        <div className="app-container">
            <h1>To-Do List</h1>
            <Input 
                addTodo={addTodo} 
                editTodo={editTodo} 
                currentTodo={currentTodo} 
                setCurrentTodo={setCurrentTodo} 
            />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <div>
                            <button onClick={() => setCurrentTodo(todo)}>
                                Edit
                            </button>
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="delete-all" onClick={deleteAllTodos}>
                Delete All
            </button>
        </div>
    );
};

export default App;
