import React, { useState, useEffect } from 'react';

const Input = ({ addTodo, editTodo, currentTodo, setCurrentTodo }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(currentTodo || '');
    }, [currentTodo]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddClick = () => {
        if (inputValue.trim()) {
            if (currentTodo) {
                editTodo(inputValue);
            } else {
                addTodo(inputValue);
            }
            setInputValue('');
            setCurrentTodo(null);
        } else {
            alert('Please enter a valid task.');
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add or edit task"
                className="todo-input"
            />
            <button onClick={handleAddClick}>{currentTodo ? 'Update' : 'Add'}</button>
        </div>
    );
};

export default Input;
