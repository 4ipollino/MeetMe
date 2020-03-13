import React, {Component, useReducer} from 'react';
import {Image, Text} from "grommet";

class UserData extends Component
{
    render() {
        return(
            <div>
                <Image height='60em' width='60em' src={window.location.origin + '/logo512.png'} alt="React Logo"/>
                <Text color='white' textAlign='center'>user.name</Text>
            </div>
        );
    }
}

export default UserData;
