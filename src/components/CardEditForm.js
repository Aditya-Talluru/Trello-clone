import React , {useState} from 'react';
import {useBoards} from './BoardsContext';

function CardEditForm({card, listId, boardId, setIsEditing}) {
    const {editCard} = useBoards();
    const [newCardTitle, setNewCardTitle] = useState(card.title);
    const [newCardDescription, setNewCardDescription] = useState(card.description);
    const [newCardDueDate, setNewCardDueDate] = useState(card.dueDate);

    
        return (
          <div>
            <input value={newCardTitle} onChange={e => setNewCardTitle(e.target.value)} />
            <input value={newCardDescription} onChange={e => setNewCardDescription(e.target.value)} />
            <input type="date" value={newCardDueDate} onChange={e => setNewCardDueDate(e.target.value)} />
            <button onClick={() => { editCard(boardId, listId, card.id, newCardTitle, newCardDescription, newCardDueDate); setIsEditing(false); }}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        );
      }
 


export default CardEditForm