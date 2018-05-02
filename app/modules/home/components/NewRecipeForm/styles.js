import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recipeTitle: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: color.grey3
    },
    recipeDescription: {
        fontSize: fontSize.header,
    },
    TopRow: {
        paddingRight: padding,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: color.grey3,
    },
    multilineLabel: {
        fontSize: fontSize.large18,
        color: color.grey4,
        // borderWidth: 1,
        // borderColor: color.grey3,
    },
    additionalInfo: {
        fontSize: fontSize.regular,
        // borderWidth: 1,
        // borderColor: color.grey3,
        alignItems: 'flex-end',
        textAlign: 'right',
    },
    additionalInfoContainer: {
        alignItems: 'flex-end',
        width: 150,
        height: 40
    },
    multilineInput: {
        margin: padding,
        borderWidth: 1,
        borderColor: color.grey3,
        borderRadius: 5,
        backgroundColor: color.white,
    },
    touchable: {
        alignItems: 'center',
        paddingTop: padding,
        paddingBottom: padding,
    },
    multilineTouchable: {
        fontSize: fontSize.large,
    },
    touchableUnderlayColor: {
        color: color.red100,
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

