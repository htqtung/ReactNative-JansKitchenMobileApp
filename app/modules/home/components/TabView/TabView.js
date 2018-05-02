import React from 'react';
import { 
    StyleSheet, 
    Dimensions 
} from 'react-native';
import { 
    TabViewAnimated, 
    TabBar, 
    SceneMap
} from 'react-native-tab-view';
import TrendingRecipeList from '../TrendingRecipeList/TrendingRecipeList';
import RecipeNearBy from '../RecipeNearBy/RecipeNearBy';

import theme from '../../index';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

const FirstRoute = () => <TrendingRecipeList />;
const SecondRoute = () => <RecipeNearBy />;

export default class TabView extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Trending' },
            { key: 'second', title: 'Nearby' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => (
        <TabBar
            {...props}
            style={{ backgroundColor: '#fff', }}
            labelStyle={{ color: '#FF1744' }}
            indicatorStyle={{ backgroundColor: '#FF1744' }}
        />
    );

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    render() {
        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});