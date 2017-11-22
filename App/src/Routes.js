import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Lost from './pages/Lost';
import Found from './pages/Found'

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={false}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
						<Scene key="menu" component={Menu} title="Menu"/>
						<Scene key="lost" component={Lost} title="Lost"/>
						<Scene key="found" component={Found} title="Found"/>
			    </Stack>
			 </Router>
			)
	}
}