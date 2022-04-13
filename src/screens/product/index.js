import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {colors} from '../../constants/themes';
import {useSelector, connect, useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cart.action';

const Product = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, weight} = product;

  const handleAddItem = () => dispatch(addItem(product));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>price: ${price}</Text>
      <Text style={styles.text}>weight: {weight}</Text>
      <Button title="Buy" onPress={() => handleAddItem()} color={colors.primaryColor} />
      <View style={styles.cartButton}>
      </View>
    </View>
  );
};

export default connect()(Product);
