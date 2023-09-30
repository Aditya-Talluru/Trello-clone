import React from 'react';
import { useBoards } from '../contexts/BoardsContext';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { boards } = useBoards();
  const { boardId, list, card } = useParams();

  // Finding the board, list, and card based on the route parameters
  const board = boards.find(b => String(b.id) === String(boardId));
  if (!board) return <div>Error: Board not found!</div>;



  const listDetails = board.lists.find(l => String(l.id) === String(list));
  if (!listDetails) return <div>Error: List not found!</div>;

  const cardDetails = listDetails.cards.find(c => String(c.id) === String(card));
  if (!cardDetails) return <div>Error: Card not found!</div>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px', margin: '40px auto', }}>
      <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>{cardDetails.title}</h2>
      <p style={{ marginTop: '20px' }}>{cardDetails.description}</p>
      <p style={{ marginTop: '20px', color: 'gray', fontStyle: 'italic' }}>{cardDetails.dueDate}</p>
    </div>
  )
}

export default CardPage;
