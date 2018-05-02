import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        // borderWidth: 1,
        // borderColor: color.white,
    },
    username: {
        color: color.white,
        paddingLeft: 8,
        fontSize: fontSize.header,
        fontWeight: 'bold',
    }
});

export default styles;