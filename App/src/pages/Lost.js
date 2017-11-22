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
  Image
} from 'react-native';
var axios = require('axios');
export default class Found extends Component {
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
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Kehilangan A
                </Text>
                <Button iconLeft dark onPress={() => {
                  axios.post('https://api.mainapi.net/smsnotification/1.0.0/messages', {
                    'msisdn': '08563568919',
                    'content': 'User A menemukan A'
                  },{
                    headers:
                    {
                      'Accept' : 'application/json',
                      'Content-Type' : 'application/x-www-form-urlencoded',
                      'Authorization' : 'Bearer 22fa579134970c39e2910c69b03cb7bd'
                    }
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }}>
                  <Icon name='cog' />
                  <Text>Claim Ketemu</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>     

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
              <Text style={styles.textTitle}>
                Kehilangan STNK
              </Text>
            </View>
          </Card>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
    color:'#202021'
  },
  textDescryption: {
    fontSize: 10,
    fontFamily:'Arial',
    color:'#767677'
  }
});