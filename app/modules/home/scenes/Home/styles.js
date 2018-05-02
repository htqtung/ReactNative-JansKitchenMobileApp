import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.red50,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    coverImage: {
        height: 80,
        width: windowWidth - 40,
    },
    title: {
        // flex: 3,
        borderColor: color.black,
        borderWidth: 1,

    },
    header: {
        alignItems: 'center',
        // borderColor: color.red,
        // borderWidth: 1,
    },
    body: {
        flex: 1,
        // borderColor: color.red,
        // borderWidth: 1,
    },
    searchBarContainerStyle: {
        width: '100%',
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        // borderColor: color.red,
        // borderWidth: 1,
    },
    searchBarInputStyle: {
        backgroundColor: color.white,
        borderColor: color.grey1,
        borderWidth: 1,
        fontSize: fontSize.regular,
        color: color.grey5,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default styles;

// bottomContainer: {
//     backgroundColor: "white",
//         paddingVertical: padding * 3,
//             shadowColor: "#000000",
//                 shadowOpacity: 0.8,
//                     shadowRadius: 2,
//                         shadowOffset: {
//         height: 1,
//             width: 0
//     }
// },

// buttonContainer: {
//     justifyContent: "center",
//         alignItems: "center"
// },