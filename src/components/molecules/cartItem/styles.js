import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      fontFamily: 'Rubik-Bold',
  },
  name: {
      fontSize: 20,
      color: '#212121',
  },
  details: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  quantity: {
      fontSize: 16,
      fontFamily: 'Rubik-Regular',
  },
  price: {
      fontSize: 16,
      fontFamily: 'Rubik-Regular',
      color: '#212121',
  }
});
