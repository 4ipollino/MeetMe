import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, withRouter} from "react-router";
import {Box, Button, TextInput, Text, Form, Layer, RoutedAnchor} from 'grommet';

class RegistrationView extends Component
{
    requestOptions = {
        timeout: 8000
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            repeatPass: '',
            isRegistered: false,
        };
    }

    handleChange = event => {
        this.setState({[event.target.name] :  event.target.value});
    }

    Validate() {
        try {
            return (
                this.state.email.length > 0 &&
                this.state.password.length > 0 &&
                this.state.repeatPass.length > 0 &&
                this.state.email.match('.+@.+\\..+') !== null &&
                this.state.password === this.state.repeatPass
            );
        }
        catch (e) {
            console.log(e.message);
            return false;
        }
    }

    User() {
        return(
            {
                email: this.state.email,
                password: this.state.password
            }
        );
    }

    signUp = event => {
        event.preventDefault();

        axios
            .post('http://localhost/register', this.User(), this.requestOptions)
            .then(res => {
                this.setState(this.setState(() => ({
                    isRegistered: true
                })))
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
        const isEnabled = this.Validate();
        if (this.state.isRegistered === true) {
            return (<Redirect to='/signin' />);
        }

        return (
            <div>
                <div>
                    <Form>
                        <Layer position="top" full="vertical" modal={false} plain={true}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                                <h1>Registration</h1>
                            </Box>
                            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                                <Text>Email</Text>
                                <TextInput type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                            </Box>
                            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                                <Text>Password</Text>
                                <TextInput type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                            </Box>
                            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                                <Text>Repeat Password</Text>
                                <TextInput type="password" name="repeatPass" id="repeatPass" value={this.state.repeatPass} onChange={this.handleChange}/>
                            </Box>
                            <Box pad={{ horizontal: 'medium', vertical: 'small'}}>
                                <Button disabled={!isEnabled} onClick={this.signUp} label="Register"/>
                                <div className="flex-center">
                                    <RoutedAnchor path="/signin">Sign In</RoutedAnchor>
                                </div>
                            </Box>
                        </Layer>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(RegistrationView);