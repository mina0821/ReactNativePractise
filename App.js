import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import AddScreen from './screen/AddScreen';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Search: SearchScreen,
  Add: AddScreen
  }, 
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);