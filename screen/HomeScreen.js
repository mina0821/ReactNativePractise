import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add to record"
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Search through record"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        </View>
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