import { StyleSheet, } from 'react-native';
import { theme } from "../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.red50,
    },
    headerOuter: {
        backgroundColor: '#FF1744',
        height: 60,
        // borderWidth: 1,
        // borderColor: theme.color.white,
        padding: theme.padding,
    },
    headerInner: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: theme.color.black,
    }
});

export default styles;