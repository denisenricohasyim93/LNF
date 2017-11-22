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
          <Card>
          <CardItem>
            <Body>
              <Text>
                 Kehilangan B
              </Text>
              <Button iconLeft dark onPress={() => {
                fetch('https://api.mainapi.net/smsnotification/1.0.0/messages', {
                  method: 'POST',
                  headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Bearer 2ec2783649188bf7da12f0c9c9c4a5f8'
                  },
                  body: JSON.stringify({
                    msisdn: '082242414959',
                    content: 'halo test fetch',
                  })
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
        <Card>
            <CardItem>
              <Body>
                <Text>
                   Kehilangan C
                </Text>
                <Button iconLeft dark onPress={() => {
                  axios.post('https://api.mainapi.net/smsnotification/1.0.0/messages', {
                    'msisdn': '08563568919',
                    'content': 'Flintstone'
                  },{
                    headers:
                    {
                      'Accept' : 'application/json',
                      'Content-Type' : 'application/x-www-form-urlencoded',
                      'Authorization' : 'Bearer d1ea7af8a4fdf769b9eb6fd5a7f02872'
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
        </Content>
      </Container>
    );
  }
}