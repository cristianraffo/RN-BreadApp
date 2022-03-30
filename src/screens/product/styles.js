import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    productsImg: {
        width: width / 1.5,
        height: height * 0.2
    },
    price: {
        fontSize: 16,
    }
})