import React,{useState } from 'react';
import { useBoards } from './BoardsContext';
import { Link} from 'react-router-dom';
import { Card, CardContent, Grid } from '@mui/material';
import BoardsForm from './BoardsForm';
import '../styles/StyleGuide.css';

const Dashboard = () => {
  const { boards, createBoard, archiveBoard, deleteBoard } = useBoards();

  const activeBoards = boards.filter(board => !board.archived)

  return ( 
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        {activeBoards.map((board) => (
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
      <BoardsForm />
    </div>
  );
};

export default Dashboard;
