import React from 'react';
import Dashboard from './components/Dashboard';
import { BoardsProvider } from './components/BoardsContext';
import {UserProvider} from './components/UserContext';
import { Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import Header from './components/Header';

function App() {

  return (
    <>
    <header>
      <Header />
    </header>
    
    <UserProvider>
    <BoardsProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/DashBoard' element={<Dashboard />} />
        <Route path='/board/:boardId' element={<Board />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        
      </Routes> 
    </BoardsProvider>
    </UserProvider>
    
    </>
  );
}

export default App;
