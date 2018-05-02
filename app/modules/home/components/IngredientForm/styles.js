import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    inlineRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: padding,
        // borderWidth: 1,
        // borderColor: color.red_cherry 
    },
    freeInput: {
        width: '100%',
        color: color.black,
        fontSize: fontSize.medium,
        // borderWidth: 1, 
        // borderColor: color.black 
    },
    freeInputContainer: {
        width: '85%',
    },
});

export default styles;