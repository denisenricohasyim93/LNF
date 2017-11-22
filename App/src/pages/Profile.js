import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Button
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/FormProfile';

import {Actions} from 'react-native-router-flux';

export default class Profile extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    paddingBottom:20
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  buttonChange: {
    height:30,
    margin : 5,
    borderRadius: 20,
    backgroundColor:'#33abf9',
    marginVertical: 10,
    paddingVertical: 13,
  },
});
