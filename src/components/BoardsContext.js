import React, { useState, createContext, useContext } from 'react';

const BoardsContext = createContext();

export const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  const createBoard = (name, description = '') => {
    setBoards(boards => [...boards, { id: Date.now(), name, description, archived: false, lists: [] }]);
  };

  const deleteBoard = (boardId) => {
    setBoards(boards => boards.filter(board => board.id !== boardId));
  };

  const archiveBoard = (boardId) => {
    setBoards(boards => boards.map(board => board.id === boardId ? { ...board, archived: true } : board));
  };

  const createList = (boardId, name) => {
    setBoards(boards => boards.map(board => 
      board.id === boardId
        ? { ...board, lists: [...board.lists, { id: Date.now(), name, cards: [] }] }
        : board
    ));
  };

  const deleteList = (boardId, listId) => {
    setBoards(boards => boards.map(board => 
      board.id === boardId
        ? { ...board, lists: board.lists.filter(list => list.id !== listId) }
        : board
    ));
  };

  const createCard = (boardId, listId, title, description = '', dueDate = null) => {
    setBoards(boards => boards.map(board => 
      board.id === boardId
        ? {
            ...board,
            lists: board.lists.map(list =>
              list.id === listId
                ? { ...list, cards: [...list.cards, { id: Date.now(), title, description, dueDate }] }
                : list
            )
          }
        : board
    ));
  };

  const deleteCard = (boardId, listId, cardId) => {
    setBoards(boards => boards.map(board => 
      board.id === boardId
        ? {
            ...board,
            lists: board.lists.map(list =>
              list.id === listId
                ? { ...list, cards: list.cards.filter(card => card.id !== cardId) }
                : list
            )
          }
        : board
    ));
  };

  const value = { 
    boards,
    createBoard, 
    deleteBoard, 
    archiveBoard, 
    createList, 
    deleteList, 
    createCard, 
    deleteCard
  };

  return <BoardsContext.Provider value={value}>{children}</BoardsContext.Provider>;
};

export const useBoards = () => useContext(BoardsContext);
