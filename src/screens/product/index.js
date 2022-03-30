import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chipa</Text>
      <Text style={styles.price}>$20</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          style={styles.productsImg}
          source={require('../../../assets/images/chipa.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Product;
