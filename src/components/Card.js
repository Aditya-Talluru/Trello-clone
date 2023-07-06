// Card.js
import React from 'react';
import { useBoards } from './BoardsContext';

const Card = ({ card, listId, boardId }) => {
  const { deleteCard } = useBoards();

  return (
    <div>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <p>Due date: {card.dueDate}</p>
      <button onClick={() => deleteCard(boardId, listId, card.id)}>Delete card</button>
    </div>
  );
};

export default Card;
