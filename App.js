import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './Screens/BookTransaction';
import SearchScreen from './Screens/SearchScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return (
      <Container/>
    );
  }
}

const Navigator = createBottomTabNavigator({
  BookTransaction: {screen: BookTransaction},
  SearchScreen : {screen: SearchScreen},
});

const Container = createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
