import React from 'react';
import {
    Dimensions
} from 'react-native';
import {
    TabViewAnimated,
    TabBar,
    SceneMap
} from 'react-native-tab-view';

import BookmarkList from '../BookmarkList/BookmarkList';
import UserRecipe from '../UserRecipe/UserRecipe';
import Gallery from '../Gallery/Gallery';

import styles from './styles';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

const FirstRoute = () => <UserRecipe />;
const SecondRoute = () => <BookmarkList />;
const ThirdRoute = () => <Gallery />;

class DrawerTabView extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Recipe' },
            { key: 'second', title: 'Bookmark' },
            { key: 'third', title: 'Gallery' },
        ],
    };

    handleIndexChange = index => this.setState({ index });

    renderHeader = props => (
        <TabBar
            {...props}
            style={{ backgroundColor: '#fff' }}
            labelStyle={{ color: '#FF1744' }}
            indicatorStyle={{ backgroundColor: '#FF1744' }}
        />
    );

    renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    render() {
        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this.renderScene}
                renderHeader={this.renderHeader}
                onIndexChange={this.handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

export default DrawerTabView;