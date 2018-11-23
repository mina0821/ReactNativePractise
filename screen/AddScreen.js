import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

//for further developement, useful links:
//http://facebook.github.io/react-native/docs/asyncstorage.html

export default class AddScreen extends React.Component {
  state = {
    'name': ''
  }
  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   
  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInput} autoCapitalize = 'none'
        onChangeText = {this.setName}/>
        <Text>
          {this.state.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    margin: 5,
    height: 50,
    width: 100,
    borderWidth: 1,
    backgroundColor: '#7685ed'
  }
})