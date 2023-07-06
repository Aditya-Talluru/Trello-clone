import React,{useState } from 'react';
import { useBoards } from './BoardsContext';
import Board from './Board';

const Dashboard = () => {
  const { boards, createBoard, archiveBoard } = useBoards();
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createBoard(boardName, boardDescription);
    setBoardName('');
    setBoardDescription('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={boardName} onChange={(e) => setBoardName(e.target.value)} placeholder="New board name" required/>
        <input type="text" value={boardDescription} onChange={(e) => setBoardDescription(e.target.value)} placeholder="New board description" />
        <button type="submit">Create board</button>
      </form>
      {boards.map(board => <Board key={board.id} board={board} archiveBoard={archiveBoard} />)}
    </div>
  );
};

export default Dashboard;
