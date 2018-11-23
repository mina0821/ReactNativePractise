import React from 'react';
import { Alert, Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class SearchScreen extends React.Component {
  state = {
    'name': ''
  }
  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
});