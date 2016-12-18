import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA3N8XonttWUvHwGnNPwIfcoRa4JezW2jk',
      authDomain: 'auth-f7bbb.firebaseapp.com',
      databaseURL: 'https://auth-f7bbb.firebaseio.com',
      storageBucket: 'auth-f7bbb.appspot.com',
      messagingSenderId: '381334656024'
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
