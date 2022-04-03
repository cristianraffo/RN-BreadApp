import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from './styles';

const CategoryProducts = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
    {/* <ImageBackground  source={{uri: item.image}} style={styles.image}> */}
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View style={styles.details}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryProducts;
