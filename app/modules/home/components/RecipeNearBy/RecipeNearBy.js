import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    Button,
    Text,
} from 'react-native-elements';


export default class RecipeNearBy extends React.Component {
    render() {
        return (
            <Text>Here you can find some local recipes</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
