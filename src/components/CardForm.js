import React,{useState} from 'react'
import { useBoards } from './BoardsContext';

const CardForm = ({ listId, boardId }) => {
    const { createCard } = useBoards();
    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardDueDate, setCardDueDate] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(boardId, listId, cardTitle, cardDescription, cardDueDate);
    setCardTitle('');
    setCardDescription('');
    setCardDueDate(null);
  };
 
 

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} plac    eholder="New card title" /><br/>
            <input type="text" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} placeholder="Card Description" /><br />
            <input type="date" value={cardDueDate} onChange={(e) => setCardDueDate(e.target.value)} placeholder="Due Date" /><br />
            <button type="submit">Create card</button>
        </form>
    </div>
  )
}

export default CardForm
