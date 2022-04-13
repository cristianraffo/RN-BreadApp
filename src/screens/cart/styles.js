import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    list: {
        flex: .8
    },
    footer: {
        flex: 2,
        borderTopColor: colors.primaryColor,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    total: {
        fontSize: 18,
        fontFamily: 'Rubik-Regular',
        padding: 10
    },
    totalPrice: {
        fontSize: 16,
        fontFamily: 'Rubik-Bold',
        padding: 10,
    }
});