import React from 'react';
import Dashboard from './components/Board/Dashboard';
import { BoardsProvider } from './components/contexts/BoardsContext';
import {UserProvider} from './components/contexts/UserContext';
import { Route, Routes } from 'react-router-dom';
import Board from './components/Board/Board';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import Header from './components/Header';
import List from './components/List/List';
import Card from './components/Card/Card';
import CardPage from './components/Card/CardPage';
import ListPage from './components/List/ListPage';

function App() {

  return (
    <>
    <header>
      <Header />
    </header>
    
    <UserProvider>
    <BoardsProvider>
    <Routes>
        <Route path="/">
          <Route path="Dashboard">
            <Route path="boardId/:boardId"> 
              <Route path="list/:list">
                <Route path="card/:card" element={<CardPage />}/>
                  <Route index element={<ListPage />}/>
                </Route>
              <Route index element={<Board />}/>
              </Route>
            <Route path="" element={<Dashboard />}/>
            </Route>
          <Route path="" element={<HomePage />} />
            <Route path="/signin" element={< SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Route> 
      </Routes>

    </BoardsProvider>
    </UserProvider>
    
    </>
  );
}

export default App;


