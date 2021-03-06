import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    color: colors.textColor,
  },
  description: {
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    color: colors.textColor
},
  price: {
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
    color: '#000000',
  }
});
