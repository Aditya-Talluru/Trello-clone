import React from 'react';
import { useBoards } from '../contexts/BoardsContext';
import { useParams } from 'react-router-dom';

const CardPage = () => {
  const { boards } = useBoards();
  const { boardId, list, card } = useParams();


  console.log("card page", boardId, list, card); // Logging the extracted params

  // Finding the board, list, and card based on the route parameters
  const board = boards.find(b => String(b.id) === String(boardId));
  if (!board) return <div>Error: Board not found!</div>;



  const listDetails = board.lists.find(l => String(l.id) === String(list));
  if (!listDetails) return <div>Error: List not found!</div>;

  const cardDetails = listDetails.cards.find(c => String(c.id) === String(card));
  if (!cardDetails) return <div>Error: Card not found!</div>;

  return (
    <>
      <h1>Card </h1>
      <h2>{cardDetails.title}</h2>
      <p>{cardDetails.description}</p>
      <p>{cardDetails.dueDate}</p>
    </>
  )
}

export default CardPage;
