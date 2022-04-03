import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {colors} from '../../constants/themes';
import {useSelector, connect} from 'react-redux';

const Product = ({navigation, route}) => {
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, weight} = product;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>price: ${price}</Text>
      <Text style={styles.text}>weight: {weight}</Text>
      <Button title="Add" onPress={() => null} color={colors.primaryColor} />
    </View>
  );
};

export default Product;
