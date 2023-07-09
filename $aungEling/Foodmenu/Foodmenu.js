import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import Searchbar from '../Homepage/View/searchbar';
import Cardfood from './Cardfood';
const ijo = '#04450B';

class Foodmenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.judul}>
          <Text style={styles.teks}>Food Menu</Text>
        </View>
        <View style={styles.Searchbar}>
          <Searchbar />
        </View>
        <View style={styles.content}>
         <Cardfood/>
        </View>
        <StatusBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  judul: {
    flex: 0.5,
    backgroundColor: '#FFFFFF',
  },
  teks: {
    color: ijo,
    fontSize: 32,
    fontWeight: 'bold',
    margin:20
  },
  Searchbar: {
    flex: 0.3,
    margin:10
  },
  content: {
    flex: 4,
    backgroundColor: '#FFFFFF',
  },
});

export default Foodmenu;
