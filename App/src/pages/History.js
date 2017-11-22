import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Icon, 
  Button, 
  Text, 
  Content, 
  Card, 
  CardItem, 
  Body
} from 'native-base';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableHighlight
} from 'react-native';
var axios = require('axios');
export default class History extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Card flexDirection='row'>
            <View style={{flex: 3}}>
              <Text style={styles.textTitle}>
                Kehilangan STNK
              </Text>
              <Text style={styles.textDescryption}>
                Kehilangan STNK atas nama namaku dengan nomor id 09876543212345678
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.textDetails}>
                  Detail
                </Text>
              </TouchableHighlight>
            </View>
          </Card>

          <Card flexDirection='row'>
            <View style={{flex: 3}}>
              <Text style={styles.textTitle}>
                Ditemukan STNK
              </Text>
              <Text style={styles.textDescryption}>
                Kehilangan STNK atas nama namaku dengan nomor id 09876543212345678
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.textDetails}>
                  Detail
                </Text>
              </TouchableHighlight>
            </View>
          </Card>

          <View style={{marginTop: 22}}>
            <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible)}}
              transparent
              >
              <View style={styles.mainModal}>
                <View style={styles.secondaryModal}>
                  <View style={styles.bodyModal}>
                    <Text style={styles.textTitle}>Berikut adalah detail dari item yang anda pilih :</Text>
                    <Text style={styles.textDescryptionModal}>Nama Barang : Namaku bukan namamu</Text>
                    <Text style={styles.textDescryptionModal}>Deskripsi Barang :Berikut adalah detail dari item yang anda pilih </Text>
                    <Text style={styles.textDescryptionModal}>Lokasi Penemuan : Berikut adalah detail dari item yang anda pilih</Text>
                    <Text style={styles.textDescryptionModal}>Tanggal penemuan : 12121112</Text>
                    <Text style={styles.textDescryptionModal}>Jam Penemuan : 222222</Text>
                    <Text style={styles.textDescryptionModal}>Identitas Penemu : 1212121212</Text>
                    <Image
                      style={styles.imageItemModal}
                      source={{uri: 'https://i.imgur.com/S2oslJ4.jpg'}} />
                  </View>
                  <View style={styles.buttonRow}>
                    <Button style={styles.buttonExit} 
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)}}>
                        <Text uppercase={false}>Tutup</Text>
                    </Button>
                  </View>
                </View>  
              </View>
            </Modal>
          </View>         
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    margin:10
  },
  card: {
    backgroundColor:'#ffffff',
    margin: 30
  },
  imageItem: {
    width:80,
    height:80
  },
  imageItemModal: {
    width:305,
    height:150,
    marginTop:10
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 'bold', 
    marginBottom: 2,
    marginLeft:10,
    fontFamily:'Arial',
    color:'#202021',
    marginTop:5
  },
  textDescryption: {
    fontSize: 10,
    fontFamily:'Arial',
    color:'#767677',
    marginLeft:10,
    marginBottom: 5
  },
  textDescryptionModal: {
    fontSize: 12,
    fontFamily:'Arial',
    color:'#767677',
  },
  textDetails: {
    textAlign: 'right',
    color:'#33abf9',
    marginRight:10,
    marginTop:20,
    fontSize:12,
    fontWeight: 'bold'
  },
  mainModal: {
    marginTop:10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  secondaryModal: {
    width: 350,
    height: 385,
    backgroundColor: 'white', 
    paddingLeft: 20,
    paddingRight:20,
    borderWidth: 2, 
    borderColor: '#33abf9',
  },
  bodyModal: {
    height: 320,
  },
  buttonClaim: {
    height:30,
    margin : 5,
    borderRadius: 20,
    backgroundColor:'#33abf9',
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonExit: {
    height:30,
    margin : 5,
    borderRadius: 20,
    backgroundColor:'#33abf9',
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});