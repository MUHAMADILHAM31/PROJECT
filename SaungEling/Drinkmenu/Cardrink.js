import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Cardrink = () => {
  const [menu, setMenu] = useState([
    { name: 'sate', price: 15000, image: require('../assets/download.jpg') },
    { name: 'sate', price: 12000, image: require('../assets/download.jpg') },
    { name: 'sate', price: 10000, image: require('../assets/download.jpg') },
    { name: 'Sate Ayam', price: 15000, image: require('../assets/download.jpg') }
  ]);

  const addFoodToCart = (food) => {
    console.log(`Item ${food.name} added to cart.`);
  };

  const renderCatalog = () => {
    return menu.map((item, index) => (
      <View key={index} style={styles.catalogItem}>
        <Image source={item.image} style={styles.foodImage} />
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>Rp {item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addFoodToCart(item)}
        >
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.catalogContainer}>
        <View style={styles.row}>
          {renderCatalog().slice(0, 2)}
        </View>
        <View style={styles.row}>
          {renderCatalog().slice(2)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  catalogContainer: {
    flexDirection: 'row'
  },
  row: {
    flex: 1,
    paddingHorizontal: 5
  },
  catalogItem: {
    backgroundColor: 'w',
    padding: 15,
    marginBottom: 15,
    borderRadius: 14,
    alignItems: 'center'
  },
  foodImage: {
    width: 150,
    height: 120,
    borderRadius: 14,
    marginBottom: 15
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  foodPrice: {
    fontSize: 14,
    marginBottom: 5
  },
  addButton: {
    borderRadius: 15,
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Cardrink ;
