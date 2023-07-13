// import React, { useState } from 'react';
// import { useBoards } from './BoardsContext';
// import Card from './Card.js';
// import { Stack } from '@mui/material';

// const List = ({ list, boardId }) => {
//   const { createCard, deleteList } = useBoards();
//   const [cardTitle, setCardTitle] = useState('');
//   const [cardDescription, setCardDescription] = useState('');
//   const [cardDueDate, setCardDueDate] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createCard(boardId, list.id, cardTitle, cardDescription, cardDueDate);
//     setCardTitle('');
//     setCardDescription('');
//     setCardDueDate(null);
//   };

//   return (
//     <Stack direction="row" spacing={2}>
//     <div>
//       <h3>{list.name}</h3>
//       <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} placeholder="New card title" /><br/>
//         <input type="text" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} placeholder="Card Description" /><br />
//         <input type="date" value={cardDueDate} onChange={(e) => setCardDueDate(e.target.value)} placeholder="Due Date" /><br />
//         <button type="submit">Create card</button>
//       </form>
//       {list.cards.map(card => <Card key={card.id} card={card} listId={list.id} boardId={boardId} />)}
//     </div>
//     </Stack>
//   );
// };

// export default List;

import React, { useState } from 'react';
import { useBoards } from './BoardsContext';
import Card from './Card.js';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Stack } from '@mui/material';

const List = ({ list, boardId, index }) => {
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
    <DragDropContext>
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <h3 {...provided.dragHandleProps}>{list.name}</h3>
          <button onClick={() => deleteList(boardId, list.id)}>Delete list</button>
          <form onSubmit={handleSubmit}>
            <input type="text" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} placeholder="New card title" />
            <input type="text" value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} placeholder="Card Description" />
            <input type="date" value={cardDueDate} onChange={(e) => setCardDueDate(e.target.value)} placeholder="Due Date" />
            <button type="submit">Create card</button>
          </form>
          <Droppable droppableId={list.id}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {list.cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div {...provided.draggableProps} ref={provided.innerRef}>
                        <Card key={card.id} card={card} listId={list.id} boardId={boardId} dragHandleProps={provided.dragHandleProps} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
    </DragDropContext>
  );
};

export default List;
