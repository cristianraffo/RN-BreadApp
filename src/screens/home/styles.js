import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'Rubik-Bold',
        color: '#212121',
    },
    logo: {
        width: width / 2,
        height: height / 4,
    }
})