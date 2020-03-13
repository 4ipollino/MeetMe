import React from 'react';
import Dashboard from "../components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Nav, Anchor, Header, Box, Text, Image} from "grommet";

const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Messages", href: "/messages" },
    { label: "Profile", href: "/profile" },
    { label: "Logout", href: "/logout" }
];

function MainPage()
{
    return(
        <div>
            <Header background="dark-1" pad="medium">
                <Box direction="row" align="center" gap="small">
                    <Image height='60em' width='60em' src={window.location.origin + '/logo512.png'} alt="React Logo"/>
                    <Text color='white' textAlign='center'>user.name</Text>
                </Box>
                <Nav direction="row" background="dark-1" pad="medium">
                    {navItems.map(item => (
                        <Anchor href={item.href} label={item.label} key={item.label} hoverIndicator/>
                    ))}
                </Nav>
            </Header>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default MainPage;