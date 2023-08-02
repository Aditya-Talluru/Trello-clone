import React, {useState} from 'react';
import {useBoards} from './BoardsContext';

function EditListForm({list, boardId, setIsEditing}) {
    const {editList} = useBoards();
    const [newListName, setNewListName] = useState(list.name);

    
        return (
            <div>
                <input type='text' value={newListName} onChange={e => setNewListName(e.target.value)} />
                <button onClick={() => { editList (boardId, list.id, newListName); setIsEditing(false); }}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        );
    
}

export default EditListForm