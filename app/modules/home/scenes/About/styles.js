import { StyleSheet, } from 'react-native';
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.red50,
        alignItems: 'center',
    },
    text: {
        color: color.grey4,
        fontSize: fontSize.medium,
    }
});

export default styles;