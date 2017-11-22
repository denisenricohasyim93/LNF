import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Image
} from 'react-native';

import Logo from '../components/Logo';
import FormSetting from '../components/FormSetting';

import {Actions} from 'react-native-router-flux';

export default class Profile extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
        <View style={{height: 50}}/>
				<Image  style={{width:100, height: 100}}
          			source={require('../images/usericon.png')}/>
				<FormSetting type="Setting"/>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#33abf9',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    height: 600
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
  }
});
