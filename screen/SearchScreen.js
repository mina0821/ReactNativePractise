import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
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