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
              <View style={{
                marginTop: 22,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent'
                }}>
                <View style={{
                  width: 350,
                  height: 380,
                  backgroundColor: 'white', 
                  padding: 20,
                  borderWidth: 5, 
                  borderColor: '#33abf9',
                  }}>
                  <View style={{height: 200}}>
                    <Text>Lorem Ipsum</Text>

                    <TouchableHighlight onPress={() => {
                      this.setModalVisible(!this.state.modalVisible)
                    }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                  <Button full dark style={{margin : 10,borderRadius: 25}} onPress={() => {
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
                    <Text>Claim Ketemu</Text>
                  </Button>
                  <Button 
                    full 
                    info 
                    style={{margin : 10, borderRadius: 25}} 
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible)}}>
                    <Text>Exit</Text>
                  </Button>
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
  }
});