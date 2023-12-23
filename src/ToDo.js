import React from 'react'
import { useState } from 'react';
import './ToDo.css';

const ToDo = () =>{
    let [inputValue,setInputValue]=useState('');
    let [todos, setTodos]=useState([]);

    const inputItem = (e) =>{
        setInputValue(e.target.value);
    };

    const addItem=()=>{
        setTodos([...todos, inputValue]);
        setInputValue('');
        
    };

    const deleteItem=(index)=>{
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className='todo-container'>
            <h1 className="header">To Do List</h1>
            <div className='itemList'>
                <div>
                    {todos.map((item, index) => (
                        <li key={index} className="todo-item">
                            {item}
                            <button className="delete-button" onClick={()=>deleteItem(index)}>-</button>
                        </li>
                    ))}
                </div>
            </div>

            <div>
                <input placeholder='Add an item' value={inputValue} onChange={inputItem}/>
                <button className="add-button" onClick={addItem}>+</button>
            </div>
        </div>
    );
}

export default ToDo;