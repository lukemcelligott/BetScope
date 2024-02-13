import React from 'react';
import { useEffect, useState } from 'react';
import './../App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function HomePage() {

    return (
        <div>
            <Card sx={{ minWidth: 275 }} className="card">
                <CardContent>
                    <h3 className='font'>
                        Portfolio
                    </h3>
                    <p className='font p-height'>
                        This portfolio site is built using <span className="skills">React</span> and <span className="skills">TypeScript</span>. I wanted to focus on improving my web design
                        skills by using <span className="skills">CSS</span> and <span className="skills">MUI</span>. This project was a quick way of teaching myself about fundamental web principles as well as hosting.
                    </p>
                    <div>
                        
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePage;