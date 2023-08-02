import React, { useState } from 'react';
import { useBoards } from './BoardsContext';
import Card from './Card.js';
import { Stack } from '@mui/material';
import EditListForm from './EditListForm';
import CardForm from './CardForm';

const List = ({ list, boardId }) => {
  const {deleteList} = useBoards();
  const [isEditing, setIsEditing] = useState(false); 

  if(isEditing){
    return <EditListForm list={list} boardId={boardId} setIsEditing={setIsEditing} />;
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <h3>{list.name}</h3>
        <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
        <button onClick={() => setIsEditing(true)}>Edit List</button>
        
        {list.cards.map(card =>{
          return(
          <Card key={card.id} card={card} listId={list.id} boardId={boardId} />)}
          )}
          <CardForm listId={list.id} boardId={boardId} /> 
      </div>
    </Stack>
  );
};

export default List;
