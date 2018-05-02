import React from 'react';
import {
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import {
    Button,
    Text,
} from 'react-native-elements';
import data from '../../../../assets/data/data';
import RecipeList from '../RecipeList/RecipeList';

export default class TrendingRecipeList extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>See dishes that are being cooked</Text>
                <RecipeList data={data} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
