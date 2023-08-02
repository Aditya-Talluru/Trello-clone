import React, { useState } from 'react';
import { useBoards } from './BoardsContext';
import '../styles/Card.css';
import '../styles/StyleGuide.css';
import CardEditForm from './CardEditForm';

const Card = ({ card, listId, boardId }) => {
  const { list, deleteCard } = useBoards();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <CardEditForm card={card} listId={listId} boardId={boardId} setIsEditing={setIsEditing} />;
  }

  return (
    <div className="card-container">
      <h4 className="card-title">{card.title}</h4>
      <p className="card-description">{card.description}</p>
      <p className="card-due-date">{card.dueDate}</p>
      <button onClick={() => deleteCard(boardId, listId, card.id)}>Delete card</button>
      <button onClick={() => setIsEditing(true)}>Edit Card</button>

      
    </div>
  );
};

export default Card
