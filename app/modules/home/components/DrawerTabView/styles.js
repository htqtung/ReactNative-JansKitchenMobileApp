import { StyleSheet, } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TabBar: {
        backgroundColor: color.white,
    },
    TabBarLabel: {
        color: color.red_cherry,
    },
    TabBarIndicator: {
        backgroundColor: color.red_cherry,
    }
});