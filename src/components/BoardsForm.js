import React, {useState} from 'react';
import { useBoards } from './BoardsContext';

const BoardsForm = () => {

    const {createBoard} = useBoards();
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
        <form onSubmit={handleSubmit}>
        <input type="text" value={boardName} onChange={(e) => setBoardName(e.target.value)} placeholder="New board name" required/>
        <input type="text" value={boardDescription} onChange={(e) => setBoardDescription(e.target.value)} placeholder="New board description" />
        <button type="submit">Create board</button>
      </form>
    </div>
  )
}

export default BoardsForm