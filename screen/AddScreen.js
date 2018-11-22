import React from 'react';
import { Alert, Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Datastore from 'react-native-local-mongodb';

export default class AddScreen extends React.Component {
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('temp_key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('temp_key');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add Screen</Text>
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