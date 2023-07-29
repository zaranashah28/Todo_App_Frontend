import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);
  
    // Function to add an item
    const addItem = (item) => {
      setTodo([...todo, item]);
    };
  
    // Function to update an item by index
    const updateItem = (index, item) => {
      const updatedData = [...todo];
      updatedData[index] = item;
      setTodo(updatedData);
    };
  
    // Function to delete an item by index
    const deleteItem = (index) => {
      const updatedData = todo.filter((_, i) => i !== index);
      setTodo(updatedData);
    };
  
    return (
      <DataContext.Provider value={{ todo, addItem, updateItem, deleteItem }}>
        {children}
      </DataContext.Provider>
    );
  };
  
export { DataContext, DataProvider };
