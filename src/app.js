import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA3N8XonttWUvHwGnNPwIfcoRa4JezW2jk',
      authDomain: 'auth-f7bbb.firebaseapp.com',
      databaseURL: 'https://auth-f7bbb.firebaseio.com',
      storageBucket: 'auth-f7bbb.appspot.com',
      messagingSenderId: '381334656024'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return (
          <Card><CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
          </CardSection></Card>
        );
      case false:
        return <LoginForm />
      default:
        return (
          <Card><CardSection>
            <Spinner size="large" />
          </CardSection></Card>
        );
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
