import React, { useState } from 'react';
import { useBoards } from '../contexts/BoardsContext';
import Card from '../Card/Card.js';
import { Stack } from '@mui/material';
import EditListForm from './EditListForm';
import CardForm from '../Card/CardForm';
import { Link,Outlet,useParams } from 'react-router-dom';

const List = ({list, boardId}) => {
  // const List = () => {
  const {deleteList} = useBoards();
  const [isEditing, setIsEditing] = useState(false); 
 
  if(isEditing){
    return <EditListForm list={list} boardId={boardId} setIsEditing={setIsEditing} />;
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        
        <Link to={`list/${list.id}`} >

             <h3>{list.name}</h3>
            </Link>
        
        <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
        <button onClick={() => setIsEditing(true)}>Edit List</button>
        
        {list.cards.map(card =>{
          return(
          <Card key={card.id} card={card} listId={list.id} boardId={boardId} />)}
          )}
          <CardForm listId={list.id} boardId={boardId} /> 
      </div>  
      <Outlet />      
    </Stack>
  );
  
};

export default List;
