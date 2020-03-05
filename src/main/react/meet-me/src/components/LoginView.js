import React, {Component} from 'react';
import {Box, Button, TextInput, Text, Form, Layer, RoutedAnchor} from 'grommet';

class LoginView extends Component
{
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
                            <TextInput type="text" name="username" id="username"/>
                        </Box>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Text>Password</Text>
                            <TextInput type="password" name="password" id="password"/>
                        </Box>
                        <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                            <Button type="submit" name="submit" label="Log In"/>
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