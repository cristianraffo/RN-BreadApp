import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import { colors } from '../../../constants/themes';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.conmtainer}>
      <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View>
          <Button title="Remove" onPress={() => onDelete(item.id)} color={colors.primaryColor} />
        </View>
      </View>
    </View>
  );
};

export default CartItem;