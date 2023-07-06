import React from 'react';
import Dashboard from './components/Dashboard';
import { BoardsProvider } from './components/BoardsContext';

function App() {

  return (
    
    <BoardsProvider>
      <Dashboard />
      
    </BoardsProvider>
  );
}

export default App;
