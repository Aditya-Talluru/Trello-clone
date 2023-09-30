import React, { useState } from 'react';
import { useBoards } from '../contexts/BoardsContext';
import Card from '../Card/Card.js';
import { Stack } from '@mui/material';
import EditListForm from './EditListForm';
import { Link,Outlet,json,useParams } from 'react-router-dom';

const ListPage = () => {
  const {deleteList, boards } = useBoards();
  const [isEditing, setIsEditing] = useState(false);
  const value = useParams();
  const boardId = value.boardId;
  const listId = value.list;
  console.log(boardId, listId);
  console.log("boards value",boards);
  console.log("above information is from list");
    const board = boards.find(board => board.id == boardId);
    const list = board.lists.find(list => list.id == listId);
  console.log(list);
  if(isEditing){
    return <EditListForm list={list} boardId={boardId} setIsEditing={setIsEditing} />;
  }

  return (
    <Stack direction="row" spacing={2}>
      <div className='list-container'>
        {console.log(list.name)}
        <h3>{list.name}</h3>
        <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
        <button onClick={() => setIsEditing(true)}>Edit List</button>
        
        {list.cards.map(card => (
          <Link to={`/Dashboard/boardId/${boardId}/list/${listId}/card/${card.id}`} key={card.id}>
            <Card card={card} listId={list.id} boardId={boardId} />
          </Link>
        ))}
      </div>  
      <Outlet />      
    </Stack>
  
  );
  
};

export default ListPage;
