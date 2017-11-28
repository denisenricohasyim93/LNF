import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Lost from './pages/Lost';
import Found from './pages/Found';

// Redux imports
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';

const RouterWithRedux = connect()(Router);
/**
*  Apply middlewares
*/
export const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);



export default class Routes extends Component<{}> {
	render() {
		return(
			<Provider store={store}>
				<RouterWithRedux>
					<Stack key="root" hideNavBar={false}>
					<Scene key="login" component={Login} title="Login" initial={true}/>
					<Scene key="signup" component={Signup} title="Register"/>
							<Scene key="menu" component={Menu} title="Menu"/>
							<Scene key="lost" component={Lost} title="Lost"/>
							<Scene key="found" component={Found} title="Found"/>
					</Stack>
				</RouterWithRedux>
			</Provider>
			)
	}
}