import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useReducer} from 'react';
import Llengues from './components/Llengues'
import LlistaObres from './components/LlistaObres'
import LlistaAutors from './components/LlistaAutors'
import {Container, Stack} from "react-bootstrap";


function App() {
    return (
        <Container>
            <Stack>
                <h1>Biblioteca per llengua</h1>
                <Llengues/>
                <p></p>
                <LlistaObres/>
                <p></p>
                <LlistaAutors/>
            </Stack>
        </Container>
    );
}

export default App;
