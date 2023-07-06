import React, { useState } from 'react';
import { useBoards } from './BoardsContext';
import Card from './Card.js';

const List = ({ list, boardId }) => {
  const { createCard, deleteList } = useBoards();
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardDueDate, setCardDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(boardId, list.id, cardTitle, cardDescription, cardDueDate);
    setCardTitle('');
    setCardDescription('');
    setCardDueDate(null);
  };

  return (
    <div>
      <h3>{list.name}</h3>
      <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} placeholder="New card title" />
        <input type="text" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} placeholder="Card Description" />
        <input type="date" value={cardDueDate} onChange={(e) => setCardDueDate(e.target.value)} placeholder="Due Date" />
        <button type="submit">Create card</button>
      </form>
      {list.cards.map(card => <Card key={card.id} card={card} listId={list.id} boardId={boardId} />)}
    </div>
  );
};

export default List;
