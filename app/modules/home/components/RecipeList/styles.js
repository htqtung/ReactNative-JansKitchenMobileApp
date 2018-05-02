import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 24,
        paddingTop: padding,
        backgroundColor: 'transparent',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    data: {
        width: '90%',
    },
    title: {
        color: color.red_cherry,
        textAlign: 'left',
    },
    image: {
        width: '100%',
        height: 200
    },
    cardStyle: {
        borderRadius: 5,
    },
    text: {
        color: color.text,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: color.grey2,
        marginTop: padding,
    },
    smallButton: {
        height: 48,
        width: 80,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    buttonOnCardText: {
        color: color.red_cherry,
    }
});

export default styles;