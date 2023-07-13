import React,{useState } from 'react';
import { useBoards } from './BoardsContext';
import { Link} from 'react-router-dom';
import { Card, CardContent, Grid } from '@mui/material';

const Dashboard = () => {
  const { boards, createBoard, archiveBoard, deleteBoard } = useBoards();
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createBoard(boardName, boardDescription);
    setBoardName('');
    setBoardDescription('');
  };

  return ( 
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        {boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
            <Card>
              <CardContent>
                <Link to={`/board/${board.id}`}>{board.name}</Link>
                <p>{board.description}</p>
                <button onClick={() => archiveBoard(board.id)}>Archive board</button>
                <button onClick={() => deleteBoard(board.id)}>Delete board</button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <form onSubmit={handleSubmit}>
        <input type="text" value={boardName} onChange={(e) => setBoardName(e.target.value)} placeholder="New board name" required/>
        <input type="text" value={boardDescription} onChange={(e) => setBoardDescription(e.target.value)} placeholder="New board description" />
        <button type="submit">Create board</button>
      </form>
    </div>
  );
};

export default Dashboard;
