import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ScrollView
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
            <ScrollView>
                <View style={styles.container}>
                    <Logo/>
                    <View style={styles.containerHelp}>
                        <Text style={styles.helpText}>Halaman ini adalah halaman petunjuk dari penggunaan aplikasi. Dalam aplikasi ini terdapat beberapa menu, diantaranya :</Text>
                        <Text style={styles.helpTextMenu}>Dashboard :</Text>
                        <Text style={styles.helpTextDecryption}>Pada halaman dashboard terdapat 2 buah tab ( Lost, Found ). Pada tab Lost anda bisa melihat dan mencari barang barang yang hilang, anda juga dapat melihat deskripsi lebih lengkap dengan cara pilih dan klik text details, setelah text details anda klik akan muncul pop up informasi dari barang tersebut, jika anda merasa barang tersebut adalah barang yang anda temukan, anda dapat memberi tahu orang yang kehilangan dengan meng-klik tombol claim, secara otomatis system akan memberitahu kepada orang yang kehilangan barang tersebut.</Text>
                        <Text style={styles.helpTextDecryption}>Pada tab Found anda bisa melihat dan mencari barang - barang yang telah ditemukan oleh se-seorang, anda juga dapat melihat deskripsi lebih lengkap dengan cara pilih dan klik text details, setelah text details anda klik akan muncul pop up informasi dari barang tersebut, jika anda merasa barang tersebut adalah milik anda yang hilang, anda dapat memberi tahu orang yang menemukan dengan meng-klik tombol claim, secara otomatis system akan memberitahu kepada orang yang menemukan bahwa barang tersebut adalah milik anda.</Text>
                        
                        <Text style={styles.helpTextMenu}>History :</Text>
                        <Text style={styles.helpTextDecryption}>Pada halaman ini anda bisa melihat barang yang anda temukan dan barang yang telah anda claim dari barang anda yang hilang.</Text>

                        <Text style={styles.helpTextMenu}>Profil :</Text>
                        <Text style={styles.helpTextDecryption}>Halaman ini adalah halaman informasi dari profil akun aplikasi anda. pada halaman ini anda dapat melihat dan mengedit informasi akun anda.</Text>

                        <Text style={styles.helpTextMenu}>About :</Text>
                        <Text style={styles.helpTextDecryption}>Halaman tentang dari aplikasi ini.</Text>

                        <Text style={styles.helpTextMenu}>Help :</Text>
                        <Text style={styles.helpTextDecryption}>Help adalah halaman yang ditunjukan untuk informasi tata cara penggunaan aplikasi.</Text>
                    </View>
                </View>
            </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  containerHelp : {
    marginBottom:20
  },
  helpText: {
    color:'#696969',
    fontSize:14,
    textAlign:'left',
    marginLeft:20,
    marginRight:20,
    fontFamily:'Arial',
  },
  helpTextMenu: {
    color:'#696969',
    fontSize:14,
    fontWeight: 'bold',
    textAlign:'left',
    marginTop: 5,
    marginLeft:20,
    marginRight:20,
    fontFamily:'Arial',
  },
  helpTextDecryption: {
    color:'#696969',
    fontSize:14,
    textAlign:'justify',
    marginLeft:40,
    marginRight:20,
    fontFamily:'Arial',
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
