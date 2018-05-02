import { StyleSheet, } from 'react-native';
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.red50,
    },
    inputText: {
        fontSize: fontSize.regular,
        width: '100%',
        fontWeight: 'bold',
        color: color.grey3,
        // borderWidth: 1,
        // borderColor: color.red,
    },
    inputContainer: {
        width: '93%',
        // borderWidth: 1,
        // borderColor: color.black,
    },
    inputFrame: {
        borderWidth: 1,
        borderColor: color.grey2,
        borderRadius: 8,
        height: 250,
        margin: padding,
        backgroundColor: color.white,
        justifyContent: 'flex-start',
    },
    buttonContainerView: {
        marginVertical: padding * 3,
        width: windowWidth - 40
    },

    button: {
        backgroundColor: color.red_cherry,
        height: normalize(55)
    },

    buttonText: {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },
});

export default styles;