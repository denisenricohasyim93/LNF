import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Form extends Component<{}> {

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
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#33abf9"
              ref={(input) => this.password = input}
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
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#33abf9',
    paddingHorizontal:16,
    fontSize:16,
    color:'#33abf9',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#33abf9',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});