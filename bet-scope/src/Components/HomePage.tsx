import React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './../App.css';
import './Styles/HomePage.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function HomePage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
            <h3>NBA</h3>
            <Card sx={{ minWidth: 275 }} className="card">
                <CardContent>
                    <h3 className='font'>
                        Boston vs. Brooklyn
                    </h3>
                    <div>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>Spread<br></br>BOS -8.5</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>ML<br></br>BOS -400</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>O/U<br></br>102.5</Item>
                        </Grid>
                    </Grid>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePage;