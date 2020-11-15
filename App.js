import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MyHeader from './Header.js';
import Search from './Segments/Search.js'

export default class App extends React.Component{
  render(){
    return (
      <View>
        <MyHeader title = 'The 0val Dictionary'/>
        <Search />
      </View>
    );
  }
}
