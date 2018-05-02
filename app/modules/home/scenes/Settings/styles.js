import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.red50,
    },
    containerView: {
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