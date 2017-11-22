// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   TouchableHighlight
// } from 'react-native';

// import Logo from '../components/Logo';
// import Form from '../components/Form';

// import {Actions} from 'react-native-router-flux';

// export default class Menu extends Component<{}> {

// 	signup() {
// 		Actions.signup()
// 	}

// 	render() {
        
        
//         return(

// 			)
// 	}
// }
import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Text,  
    Card, 
    CardItem, 
    Left,
    Thumbnail,
    Body,
    Right,
    Tabs,
    Tab
} from 'native-base';
import { 
    StyleSheet,
    View,
    StatusBar ,
    TouchableOpacity,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import History from './History';
import Profile from './Profile';
import Contact from './Contact';
import Help from './Help';
import About from './About';
import Lost from './Lost';
import Found from './Found';

export default class Menu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'dashboard'};
  }

  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'dashboard':
        return (
            <Container>
                <Tabs initialPage={0} >
                    <Tab tabFontSize="10" heading="Lost">
                        <Lost />
                    </Tab>
                    <Tab heading="Found">
                        <Found />
                    </Tab>
                </Tabs>
            </Container>
        );
        break;
      case 'history':
        return (
          <History/>
        );
        break;
      case 'profile':
        return (
          <Profile/>
        );
        break;
      case 'about':
        return (
          <About/>
        );
        break;
      case 'help':
        return (
          <Help/>
        );
        break;
      default:
    }
  }

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          {this.renderSelectedTab()}
        </Content>
        <Footer>
          <FooterTab >
            <Button active={this.state.selectedTab==='dashboard'} 
                onPress={() => this.setState({selectedTab: 'dashboard'})} >
                <Text uppercase={false}>Dashboard</Text>
            </Button>
            <Button active={this.state.selectedTab==='history'} 
                onPress={() => this.setState({selectedTab: 'history'})} >
                <Text uppercase={false}>History</Text>
            </Button>
            <Button active={this.state.selectedTab==='profile'} 
                onPress={() => this.setState({selectedTab: 'profile'})} >
                <Text uppercase={false}>Profile</Text>
            </Button>
            {/* <Button active={this.state.selectedTab==='about'} 
                onPress={() => this.setState({selectedTab: 'about'})} >
                <Text>about</Text>
            </Button> */}
            <Button active={this.state.selectedTab==='help'} 
                onPress={() => this.setState({selectedTab: 'help'})} >
                <Text uppercase={false}>Help</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#33abf9',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    signupTextCont : {
      flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    tabTop: {
      fontSize:14
    }
  });