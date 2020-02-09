import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import './App.scss';
import { Game } from '../game/game';
import { Config } from '../config/config';

const themeClassic = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red,
    },
});

function App() {
    return (
        <MuiThemeProvider theme={themeClassic}>
            <div className="App">
                <Game/>
                <Config/>
            </div>
        </MuiThemeProvider>

    );
}

export default App;
