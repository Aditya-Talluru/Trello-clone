import React, { useState } from 'react';
import { useBoards } from './BoardsContext';
import List from './ListTasks';

const Board = ({ board, archiveBoard }) => {
  const { createList } = useBoards();
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(board.id, listName);
    setListName('');
  };

  return (
    <div>
      <h2>{board.name}</h2>
      <p>{board.description}</p>
      <button onClick={() => archiveBoard(board.id)}>Archive board</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} placeholder="New list name" />
        <button type="submit">Create list</button>
      </form>
      {board.lists.map(list => <List key={list.id} list={list} boardId={board.id} />)}
    </div>
  );
};

export default Board;
