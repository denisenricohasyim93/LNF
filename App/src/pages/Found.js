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
                   Ditemukan A
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
                  <Text>Claim Hilang</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem>
            <Body>
              <Text>
                 Ditemukan B
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
                <Text>Claim Hilang</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        <Card>
            <CardItem>
              <Body>
                <Text>
                   Ditemukan C
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
                  <Text>Claim Hilang</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}