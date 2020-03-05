import React from 'react';
//import './App.css';
import { Grommet } from 'grommet';
import LoginView from './components/LoginView';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './views/MainPage';
import WelcomePage from './views/WelcomePage';
import RegistrationView from './components/RegistrationView';

function App() {
    const theme =
        {
            name: 'my theme',
            rounding: 4,
            spacing: 24,
            defaultMode: 'light',
            global: {
                colors: {
                    brand: '#6600cc',
                    background: '#FFFFFF',
                    'background-back': '#EEEEEE',
                    'background-front': '#FFFFFF',
                    'background-contrast': '#11111111',
                    text: '#333333',
                    'text-strong': '#000000',
                    'text-weak': '#444444',
                    'text-xweak': '#666666',
                    border: '#CCCCCC',
                    control: 'brand',
                    'active-background': 'background-contrast',
                    'active-text': 'text-strong',
                    'selected-background': 'brand',
                    'selected-text': 'text-strong',
                    'status-critical': '#FF4040',
                    'status-warning': '#FFAA15',
                    'status-ok': '#00C781',
                    'status-unknown': '#CCCCCC',
                    'status-disabled': '#CCCCCC',
                    'graph-0': 'brand',
                    'graph-1': 'status-warning'
                },
                font: {
                    family: 'Helvetica'
                },
                active: {
                    background: 'active-background',
                    color: 'active-text'
                },
                hover: {
                    background: 'active-background',
                    color: 'active-text'
                },
                selected: {
                    background: 'selected-background',
                    color: 'selected-text'
                }
            },
            chart: {},
            diagram: {
                line: {}
            },
            meter: {},
            layer: {
                background: '#FFFFFF'
            }
        };

return (
    <Grommet theme={theme}>
        <Router>
            <Switch>
                <Route path='/' exact component={WelcomePage}/>
                <Route path='/signin' exact component={LoginView}/>
                <Route path='/signup' exact component={RegistrationView}/>
                <Route path='/dashboard' exact component={MainPage}/>
            </Switch>
        </Router>
    </Grommet>
);
}

export default App;
