import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Alert
} from 'react-native';

import {Actions} from 'react-native-router-flux';
var axios = require('axios');

export default class Form extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      apakahlogin : 'false'
    };
  }

  handleInputChangeEmail = (value) => {
    this.setState({ email: value });
  };

  handleInputChangePassword = (value) => {
    this.setState({ password: value });
  };

  // islogin = () => {
  //   axios.post('http://localhost:8000/login', {
  //     email: this.state.email,
  //     password: this.state.password
  //   },{
  //     headers:
  //     {
  //       "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
  //       "cache-control": "no-cache",
  //       "postman-token": "31e00a9a-cdb7-2c06-14c8-084e0c137704"
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     if (response.meta.success) {
        // Alert.alert(
        //   'Login Alert',
        //   'You are sucessfully login',
        //   [
        //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'OK', onPress: Actions.menu},
        //   ],
        //   { cancelable: false }
        // )
  //     } else {
  //       Alert.alert(
  //         'Login Alert',
  //         'You are failed to login',
  //         [
  //           {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //           {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //           {text: 'OK', onPress: Actions.menu},
  //         ],
  //         { cancelable: false }
  //       )
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }

  islogin = () => {
    fetch('http://192.168.43.13:8000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        Alert.alert(
          'Login Alert',
          'You are sucessfully login',
          [
            {text: 'OK', onPress: Actions.menu},
          ],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          'Login Alert',
          'You are failed to login',
          [
            {text: 'Try Again', onPress: Actions.login},
          ],
          { cancelable: false }
        )
      }
    })
  }

	render(){ 
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#33abf9"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={emailText => this.handleInputChangeEmail(emailText)}
              value={this.state.email}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#33abf9"
              ref={(input) => this.password = input}
              onChangeText={passwordText => this.handleInputChangePassword(passwordText)}
              value={this.state.password}
              />
            {this.props.type === 'Login' ? (
              <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>    
            ) : this.props.type === 'Signup' ? (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>    
            ) : this.props.type === 'Menu' ? (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Menu</Text>
              </TouchableOpacity>    
            ) : <View />}           
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#33abf9',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    fontSize:14,
    borderColor: '#33abf9',
    height: 35,
    marginTop:10
  },
  button: {
    width:300,
    backgroundColor:'#33abf9',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 8,
    height: 35,
  },
  buttonText: {
    fontSize:14,
    fontWeight:'300',
    color:'#ffffff',
    textAlign:'center',
    fontFamily:'Arial'
  }
  
});