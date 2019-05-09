import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SectionList,
} from 'react-native';

class SectionListBasics extends Component {
  render() {
    return (
      <SectionList
        sections={[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    );
  };
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
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
        <SectionListBasics />
      </View>
    );
  }
}