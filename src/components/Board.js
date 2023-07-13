import React, { useState, useEffect } from 'react';
import { useBoards } from './BoardsContext';
import List from './List';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import '../styles/Board.css'
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
  const { boardId } = useParams();
  const { boards, createList, reorderCard } = useBoards();
  const [listName, setListName] = useState('');

  const board = boards.find(board => board.id == boardId);

  // If boards are not loaded yet, display a loading indicator
  if (!boards) {
    return <div>Loading...</div>;
  }

  // If the board is not found, display an error message
  if (!board) {
    return <div>Board not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(board.id, listName);
    setListName('');
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const { source, destination, draggableId } = result;
    reorderCard(source, destination, draggableId);
  };

  return (
    <>
    <h2> You are in Board {board.name} </h2>
    <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '10px' }}>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {board.lists.map((list, index) => 
        <Box key={list.id}>
          <List list={list} boardId={board.id}  index={index}/>
        </Box>
      )}
      </DragDropContext>
      <Box>
        <form className='list-form' onSubmit={handleSubmit}>
          <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} placeholder="New list name" /> <br />
          <button type="submit">Create list</button>
        </form> 
      </Box>
    </Box>
    </>
  );
};

export default Board;
