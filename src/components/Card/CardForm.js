import React, { useReducer } from 'react';
import { useBoards } from '../contexts/BoardsContext';


const initialState = {
  cardTitle: '',
  cardDescription: '',
  cardDueDate: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'setCardTitle':
      return { ...state, cardTitle: action.payload };
    case 'setCardDescription':
      return { ...state, cardDescription: action.payload };
    case 'setCardDueDate':
      return { ...state, cardDueDate: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CardForm = ({ listId, boardId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createCard } = useBoards();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(boardId, listId, state.cardTitle, state.cardDescription, state.cardDueDate);
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.cardTitle}
          onChange={(e) => dispatch({ type: 'setCardTitle', payload: e.target.value })}
          placeholder="New card title"
        />
        <br />
        <input
          type="text"
          value={state.cardDescription}
          onChange={(e) => dispatch({ type: 'setCardDescription', payload: e.target.value })}
          placeholder="Card Description"
        />
        <br />
        <input
          type="date"
          value={state.cardDueDate || ''}
          onChange={(e) => dispatch({ type: 'setCardDueDate', payload: e.target.value })}
          placeholder="Due Date"
        />
        <br />
        <button type="submit">Create card</button>
      </form>
    </div>
  );
};

export default CardForm;
