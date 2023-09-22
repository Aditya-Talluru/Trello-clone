import { listItemIconClasses } from '@mui/material';
import React, { useState, createContext, useContext } from 'react';
import { json } from 'react-router-dom';

const BoardsContext = createContext();

export const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  console.log(boards);

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

  const editList = (boardId, listId, newName) => {
    setBoards(prevBoards => {
      const newBoards = [...prevBoards];
      const board = newBoards.find(board => board.id === boardId);
      const list = board.lists.find(list => list.id === listId);
      list.name = newName;
      return newBoards;
    });
};

const editCard = (boardId, listId, cardId, newTitle,newDescription, newDate) => {
  setBoards(prevBoards => {
    const newBoards = [...prevBoards];
    const board = newBoards.find(board => board.id === boardId);
    if (!board) {
      console.error(`No board found with id ${boardId}`);
      return prevBoards;
    }
    const list = board.lists.find(list => list.id === listId);
    if (!list) {
      console.error(`No list found with id ${listId} in board ${boardId}`);
      return prevBoards;
    }
    const card = list.cards.find(card => card.id === cardId);
    if (!card) {
      console.error(`No card found with id ${cardId} in list ${listId}`);
      return prevBoards;
    }
    
    card.title = newTitle;
    card.description = newDescription;
    card.dueDate = newDate;
    return newBoards;
  });
};

  const deleteList = (boardId, listId) => {
    setBoards(boards => boards.map(board => 
      board.id === boardId
        ? { ...board, lists: board.lists.filter(list => list.id !== listId) }
        : board
    ));
  };

  const reorderCard = (source, destination, draggableId) => {
    setBoards(prevBoards => {
      const newBoards = [...prevBoards];
  
      // find the source and destination lists
      const sourceList = newBoards.find(board => board.id === source.droppableId);
      const destList = newBoards.find(board => board.id === destination.droppableId);
  
      // remove the card from the source list
      const [removed] = sourceList.cards.splice(source.index, 1);
  
      // add the card to the destination list
      destList.cards.splice(destination.index, 0, removed);
  
      return newBoards; // return the new boards array
    });
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
    deleteCard,
    reorderCard,
    editCard,
    editList 
  };

  return <BoardsContext.Provider value={value}>{children}</BoardsContext.Provider>;
};

export const useBoards = () => useContext(BoardsContext);

