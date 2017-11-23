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
  TouchableHighlight,
} from 'react-native';
var axios = require('axios');
import FAB from 'react-native-fab';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Form from '../components/FormAddLost';
export default class Lost extends Component {

  state = {
    modalVisible: false,
    modalVisibleAddLost: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleAddLost(visible) {
    this.setState({modalVisibleAddLost: visible});
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content style={styles.content}>
          <Card flexDirection='row'>
            <View style={{flex: 1}}>
              <Image
                style={styles.imageItem}
                source={{uri: 'https://i.imgur.com/S2oslJ4.jpg'}} />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.textTitle}>
                Kehilangan STNK
              </Text>
              <Text style={styles.textDescryption}>
                Kehilangan STNK atas nama namaku dengan nomor id 09876543212345678
              </Text>
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
            <View style={{flex: 1}}>
              <Image
                style={styles.imageItem}
                source={{uri: 'https://i.imgur.com/S2oslJ4.jpg'}} />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.textTitle}>
                Kehilangan SIM
              </Text>
              <Text style={styles.textDescryption}>
                Kehilangan SIM atas nama namaku dengan nomor id 09876543212345678
              </Text>
              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.textDetails}>
                  Detail
                </Text>
              </TouchableHighlight>
            </View>
          </Card>

          <View style={{marginTop: 22, height: 150}}>
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
                    <Text style={styles.textDescryptionModal}>Identitas Pemilik : 1212121212</Text>
                    <Image
                      style={styles.imageItemModal}
                      source={{uri: 'https://i.imgur.com/S2oslJ4.jpg'}} />
                  </View>
                  <View style={styles.buttonRow}>
                    <Button style={styles.buttonClaim} onPress={() => {
                      axios.post('https://api.mainapi.net/smsnotification/1.0.0/messages', {
                        msisdn: '082242414959',
                        content: 'User A menemukan Dompet'
                      },{
                        headers:
                        {
                          Accept : 'application/json',
                          Authorization : 'Bearer 2ec2783649188bf7da12f0c9c9c4a5f8'
                        }
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                    }}>
                      <Text uppercase={false}>Klaim Ketemu</Text>
                    </Button>
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
          <FAB buttonColor="#33abf9" iconTextColor="#FFFFFF" onClickAction={() => {this.setModalVisibleAddLost(!this.state.modalVisibleAddFound)}} visible={true} iconTextComponent={<FontAwesome>{Icons.pencil}</FontAwesome>} />         
          <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisibleAddLost}
              onRequestClose={() => {
                this.setModalVisibleAddLost(!this.state.modalVisibleAddLost)}}
              transparent
              >
              <View style={styles.mainModal}>
                <View style={styles.secondaryModalAdd}>
                  <Form type="Lost"/>
                  <View style={styles.buttonRow}>
                    <Button style={styles.buttonExit} 
                      onPress={() => {
                        this.setModalVisibleAddLost(!this.state.modalVisibleAddLost)}}>
                      <Text uppercase={false}>Simpan</Text>
                    </Button>
                    <Button style={styles.buttonExit} 
                      onPress={() => {
                        this.setModalVisibleAddLost(!this.state.modalVisibleAddLost)}}>
                      <Text uppercase={false}>Keluar</Text>
                    </Button>
                  </View>
                </View>  
              </View>
            </Modal>
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
    marginBottom: 5,
    fontFamily:'Arial',
    color:'#202021',
    marginTop:10
  },
  textDescryption: {
    fontSize: 10,
    fontFamily:'Arial',
    color:'#767677'
  },
  textDescryptionModal: {
    fontSize: 12,
    fontFamily:'Arial',
    color:'#767677'
  },
  textDetails: {
    textAlign: 'right',
    color:'#33abf9',
    marginRight:10,
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
  secondaryModalAdd: {
    width: 350,
    height: 375,
    backgroundColor: 'white', 
    paddingLeft: 20,
    paddingRight:20,
    borderWidth: 2, 
    borderColor: '#33abf9',
  },
  bodyModal: {
    height: 320,
  },
  bodyModalAdd: {
    height: 300,
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