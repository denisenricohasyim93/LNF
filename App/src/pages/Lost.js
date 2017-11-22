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
export default class Found extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
                    <Text style={styles.textDescryption}>Nama Barang : </Text>
                    <Text style={styles.textDescryption}>Deskripsi Barang : </Text>
                    <Text style={styles.textDescryption}>Lokasi Penemuan : </Text>
                    <Text style={styles.textDescryption}>Tanggal penemuan : </Text>
                    <Text style={styles.textDescryption}>Jam Penemuan : </Text>
                    <Text style={styles.textDescryption}>Identitas Penemu : </Text>
                  </View>
                  <View style={styles.buttonRow}>
                    <Button style={styles.buttonClaim} onPress={() => {
                      axios.post('https://api.mainapi.net/smsnotification/1.0.0/messages', {
                        msisdn: '08563568919',
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
                      <Text uppercase={false}>Keluar</Text>
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
  textDetails: {
    textAlign: 'right',
    color:'#33abf9',
    marginRight:10,
    fontSize:12,
    fontWeight: 'bold'
  },
  mainModal: {
    marginTop: 22,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  secondaryModal: {
    width: 350,
    height: 300,
    backgroundColor: 'white', 
    padding: 20,
    borderWidth: 2, 
    borderColor: '#33abf9',
  },
  bodyModal: {
    height: 200,
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