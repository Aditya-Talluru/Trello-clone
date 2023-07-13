import React from 'react';
import { useBoards } from './BoardsContext';
import '../styles/Card.css';

const Card = ({ card, listId, boardId }) => {
  const { deleteCard } = useBoards();

  return (
    <div className="card-container">
      <h4 className="card-title">{card.title}</h4>
      <p className="card-description">{card.description}</p>
      <p className="card-due-date">{card.dueDate}</p>
      <button onClick={() => deleteCard(boardId, listId, card.id)}>Delete card</button>
    </div>
  );
};

export default Card;
