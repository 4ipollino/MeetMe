import React, {Component} from 'react';
import {Box, Button, TextInput, Text, Form, Layer, RoutedAnchor} from 'grommet';
import axios from 'axios';
import Cookies from 'universal-cookie';

class LoginView extends Component
{
    cookies = new Cookies();

    requestOptions = {
        timeout: 8000,
        username: this.state.username
    };

    constructor(props)
    {
        super(props);
        this.state = {
            username: ''
        };
    }

    handleChange = event => {
        this.setState({[event.target.name] :  event.target.value});
    }

    signIn = event =>
    {
        event.preventDefault();
        axios.post('http://localhost/getUser/', this.state, this.requestOptions)
        .then(res => {
            this.cookies.set('username', 'Pacman', { path: '/' });
            //console.log(cookies.get('username'));
        })
        .catch(err => {
                try {
                    console.log(err.response.data.message);
                    alert(err.response.data.message);
                }
                catch (e) {
                    console.log(err);
                    alert(err);
                }
            }
        );
    }

    render() {
        return (
            <div>
                <Form method="post">
                    <Layer position="top" full="vertical" modal={false} plain={true}>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Text><h1>Log In</h1></Text>
                        </Box>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Text>Email</Text>
                            <TextInput type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                        </Box>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Text>Password</Text>
                            <TextInput type="password" name="password" id="password"/>
                        </Box>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Button type="submit" name="submit" label="Log In" onClick={this.signIn}/>
                            <div className="flex-center">
                                <RoutedAnchor path="/signup">Register</RoutedAnchor>
                            </div>
                        </Box>
                    </Layer>
                </Form>
            </div>
        );
    }
}

export default LoginView;