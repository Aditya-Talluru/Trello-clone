import React , {useReducer, useEffect} from 'react';
import {useBoards} from './BoardsContext';


const initialState = {
    editCardTitle: '',
    editCardDescription: '',
    editCardDueDate: null,
  };

const reducer = (state, action) => {
    switch (action.type) {
        case 'setEditCardTitle':
            return {...state, editCardTitle: action.payload };
        case 'setEditCardDescription':
            return {...state, editCardDescription: action.payload };
        case 'setEditCardDueDate':
            return {...state, editCardDueDate:action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}



const CardEditForm = ({ card, listId, boardId, cardId, setIsEditing }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { editCard } = useBoards();
  
    useEffect(() => {
        dispatch({ type: 'setEditCardTitle', payload: card.title });
        dispatch({ type: 'setEditCardDescription', payload: card.description });
        dispatch({ type: 'setEditCardDueDate', payload: card.dueDate });
      }, [card]);


      const handleSubmit = async (e) => {
      e.preventDefault();
      await editCard(boardId, listId,card.id, state.editCardTitle, state.editCardDescription, state.editCardDueDate);
      dispatch({ type: 'reset' });
      setIsEditing(false);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={state.editCardTitle}
            onChange={(e) => dispatch({ type: 'setEditCardTitle', payload: e.target.value })}
            placeholder="Edit card title"
          />
          <br />
          <input
            type="text"
            value={state.editCardDescription}
            onChange={(e) => dispatch({ type: 'setEditCardDescription', payload: e.target.value })}
            placeholder="Edit Card Description"
          />
          <br />
          <input
            type="date"
            value={state.editCardDueDate || ''}
            onChange={(e) => dispatch({ type: 'setEditCardDueDate', payload: e.target.value })}
            placeholder="Edit Due Date"
          />
          <br />
          <button type="submit">Edit Card</button>
        </form>
      </div>
    );
    };

// function CardEditForm({card, listId, boardId, setIsEditing}) {
//     const {editCard} = useBoards();
//     const [newCardTitle, setNewCardTitle] = useState(card.title);
//     const [newCardDescription, setNewCardDescription] = useState(card.description);
//     const [newCardDueDate, setNewCardDueDate] = useState(card.dueDate);

    
//         return (
//           <div>
//             <input value={newCardTitle} onChange={e => setNewCardTitle(e.target.value)} />
//             <input value={newCardDescription} onChange={e => setNewCardDescription(e.target.value)} />
//             <input type="date" value={newCardDueDate} onChange={e => setNewCardDueDate(e.target.value)} />
//             <button onClick={() => { editCard(boardId, listId, card.id, newCardTitle, newCardDescription, newCardDueDate); setIsEditing(false); }}>Save</button>
//             <button onClick={() => setIsEditing(false)}>Cancel</button>
//           </div>
//         );
//       }
 


export default CardEditForm