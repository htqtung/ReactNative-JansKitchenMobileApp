import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
    black: "#3B3031",
    light_black: "#414141",
    main: "rgb(99,139,250)",
    white: "#ffffff",
    light_grey: "#eaeaea",
    grey: "#ccc",
    red: "red",
    red50: '#FFEBEE',
    red100: '#FFCDD2',
    underlayColor: "#ddd",
    primary: '#2089dc',
    secondary: '#8F0CE8',
    grey0: '#EEEEEE',
    grey1: '#E0E0E0', 
    grey2: '#BDBDBD',
    grey3: '#9E9E9E',
    grey4: '#757575',
    grey5: '#616161',
    greyOutline: '#bbb',
    searchBg: '#303337',
    error: '#ff190c',
    red_cherry: '#FF1744',
    white: '#fff',
    text: '#9E9E9E'
}

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    header: normalize(16),
    medium: normalize(16),
    large18: normalize(18),
    large: normalize(21)
}

const fontFamily = {
    extrabold: "RobotoExtraBold",
    bold: "RobotoBold",
    medium: "RobotoMedium",
    regular: "RobotoRegular",
    light: "RobotoLight"
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff";

const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
const navTitleStyle = { fontSize: fontSize.regular, fontFamily: fontFamily.extrabold, color: color.red_cherry }

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    normalize
}