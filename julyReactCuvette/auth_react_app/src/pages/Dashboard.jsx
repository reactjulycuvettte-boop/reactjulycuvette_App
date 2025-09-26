import React, { useState, useCallback, memo } from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = memo(() => {
  const { user } = useAuth();
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const expensiveCalculation = useCallback((num) => {
    console.log('Performing expensive calculation...');
    return num * num;
  }, []);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleAddItem = useCallback(() => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  const squaredValue = expensiveCalculation(count);

  return (
    <div>
      <h2>Dashboard</h2>
      
      <div>
        <div>
          <h3>User Info</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
        
        <div>
          <h3>Counter</h3>
          <p>Count: {count}</p>
          <p>Squared: {squaredValue}</p>
          <Button onClick={handleIncrement}>
            Increment
          </Button>
        </div>
      </div>

      <div>
        <h3>Items List</h3>
        <>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                {item}
              </div>
            </React.Fragment>
          ))}
        </>
        <Button onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
    </div>
  );
});

const Button = memo(({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
});


export default Dashboard;