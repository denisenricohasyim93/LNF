import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class FormProfile extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <Text style={styles.textTitle}>Nama Lengkap</Text>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Nama Lengkap"
              placeholderTextColor = "#000000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />

          <Text style={styles.textTitle}>Alamat</Text>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Alamat"
              placeholderTextColor = "#000000"
              onSubmitEditing={()=> this.password.focus()}
              />
          
          <Text style={styles.textTitle}>Email</Text>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#000000"
              onSubmitEditing={()=> this.password.focus()}
              />
          
          <Text style={styles.textTitle}>Handphone</Text>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Handphone"
              placeholderTextColor = "#000000"
              onSubmitEditing={()=> this.password.focus()}
              />
          
          <Text style={styles.textTitle}>Nama Lengkap</Text>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#000000"
              ref={(input) => this.password = input}
              />
              <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                <Text style={styles.buttonText}>Simpan</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                <Text style={styles.buttonText}>Ganti Password</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                <Text style={styles.buttonText}>Keluar</Text>
              </TouchableOpacity>
                     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
  },

  inputBox: {
    width:300,
    backgroundColor:'#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#696969',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    fontSize:14,
    color:'#000000',
    height: 25
  },
  button: {
    width:300,
    height:30,
    backgroundColor:'#33abf9',
    borderRadius: 2,
    marginTop:10,
    paddingTop:3
  },
  buttonText: {
    fontSize:14,
    fontWeight:'300',
    color:'#ffffff',
    textAlign:'center',
    fontFamily:'Arial'
  },
  textTitle: {
    color:'#33abf9',
    fontSize:14,
    textAlign:'justify',
    fontFamily:'Arial',
    marginTop:5
  }
  
});