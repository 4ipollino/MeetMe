import React from 'react';
import '../styles/welcome.css';
import { Box, Button, Text, Layer } from 'grommet';

// Welcome page with links for registration and login
function WelcomePage()
{
    return(
        <Box pad={{ horizontal: 'medium', vertical: 'small'}}
             align='center'
             border={{ color: 'brand', size: 'none'}}
             elevation='medium'
             round='large'
             margin='10px'>
            <Box pad={{ horizontal: 'medium', vertical: 'small'}} align='center' alignContent='center'>
                <Text>
                    <h1 align='center'>Welcome!</h1>
                    <h2 align='center'>Try our new service which allows you to manage your time more efficient</h2>
                </Text>
            </Box>
            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                <Button onClick={redirectToLogin} label="Login"/>
            </Box>
            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                <Button onClick={redirectToSignup} label="Register"/>
            </Box>
        </Box>
    );

    function redirectToLogin() {
        setTimeout(() => {
            window.location.href = '/signin';
        }, 1000);
    }

    function redirectToSignup() {
        setTimeout(() => {
            window.location.href = '/signup';
        }, 1000);
    }
}

export default WelcomePage;