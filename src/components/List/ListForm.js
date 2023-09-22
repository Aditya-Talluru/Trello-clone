import React,{useState} from 'react';
import { useBoards } from '../contexts/BoardsContext';
import { useParams } from 'react-router-dom';

const ListForm = ({ boardId }) => {
    const {boards, createList,editList} = useBoards(); // Removed 'list' from here
    const [listName, setListName] = useState('');
   
    const board = boards.find(board => board.id == boardId);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        createList(board.id, listName);
        setListName('');
    };

    return (
        <div>
            <form className='list-form' onSubmit={handleSubmit}>
                <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} placeholder="New list name" /> <br />
                <button type="submit">Create list</button>
            </form> 
        </div>
    )
}

export default ListForm
