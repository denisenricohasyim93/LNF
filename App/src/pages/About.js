import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Contact extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
                <Logo/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Lost & Found Application adalah sebuah aplikasi yang mengusung tema sosial bagaimana kita harus peduli kepada sesama, aplikasi ini dapat digunakan untuk membantu teman, kerabat ataupun orang disekitar kita yang membutuhkan bantuan untuk mencari barang yang hilang.</Text>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    marginTop:140
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#696969',
    fontSize:14,
    textAlign:'left',
    marginLeft:20,
    marginRight:20,
    fontFamily:'Arial',
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
