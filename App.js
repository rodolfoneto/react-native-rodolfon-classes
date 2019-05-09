import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

class FlatListBasics extends Component {
  render() {
    return(
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    );
  };
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default class SecondClass extends Component {
  render() {
    return (
      <View style={{padding: 10, backgroundColor: 'white', flex:1}} >
        <FlatListBasics />
      </View>
    );
  }
}