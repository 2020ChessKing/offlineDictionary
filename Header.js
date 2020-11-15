import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';

const MyHeader = props => {
    return (
      <View>
        <Header
            backgroundColor = 'orange'
            centerComponent = {{text : props.title, style : {color : 'black', fontSize : 30, fontFamily : 'Arial'}}}
        />
      </View>
    );
}

export default MyHeader;
