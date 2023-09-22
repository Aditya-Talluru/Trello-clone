import React, { useState, useEffect } from 'react';
import { useBoards } from '../contexts/BoardsContext';
import List from '../List/List';
import { Box } from '@mui/material';
import { useParams, Outlet, Link } from 'react-router-dom';
// import '../styles/Board.css'
import ListForm from '../List/ListForm';
import '../../styles/Board.css';
import ListPage from '../List/ListPage';

const Board = () => {
  const {boardId} = useParams();
  const { boards, createList, reorderCard } = useBoards();
  // const boardIdValue = boardId
  // console.log(boardId);

  // console.log("Board Component is getting called");

  const board = boards.find(board => board.id == boardId);

  console.log(board);

  // If boards are not loaded yet, display a loading indicator
  if (!boards) {
    return <div>Loading...</div>;
  }

  // If the board is not found, display an error message
  if (!board) {
    return <div>Board not found</div>;
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const { source, destination, draggableId } = result;
    reorderCard(source, destination, draggableId);
  };


  return (
    <>
    
    <h2> You are in Board {board.name} </h2>
    <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '10px' }}>
      {board.lists.map((list, index) => 
        <Box key={list.id}>
          <List list={list} boardId={board.id}  index={index}/>
           
            
               {/* </Box>  */}
               {/* <List list={list} boardId={board.id}  index={index}/> */}
               </Box>
      //       {/* </Box></Link> */}
      //       {/* </Link> */}
      //  {/* </Box>   */}
      )}
      <Box>
        <ListForm  boardId={board.id} />
      </Box>
    </Box>
    <Outlet />
    </>
  );
};

export default Board;
