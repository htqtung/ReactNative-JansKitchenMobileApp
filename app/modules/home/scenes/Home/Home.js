import React from 'react';
var { 
    ScrollView, 
    View,
    Text,
    Image
} = require('react-native');

import { 
    Button,
    SearchBar
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import styles from "./styles"

import AnimatedImage from '../../../auth/components/AnimatedImage/AnimatedImage';
import TabView from '../../components/TabView/TabView';

// const { color } = theme;

class Home extends React.Component {
    render() {
        return (
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.header}>
                        <Image
                            style={{width: 300, height: 100}}
                            resizeMode='contain'
                            source={require('../../../../assets/images/brand3.png')}
                        />
                        <SearchBar
                            lightTheme
                            round
                            onChangeText={this.handleChange}
                            onClearText={this.handleChange}
                            containerStyle={styles.searchBarContainerStyle}
                            inputStyle={styles.searchBarInputStyle}
                            placeholder='Ingredient name, dish,...'
                        />
                    </View>
                    <View style={styles.body}>
                        <TabView />
                    </View>
                    <ActionButton
                        buttonColor="rgba(255, 23, 68,1)"
                        renderIcon={() => { return (<Icon name="create" iconStyle={styles.actionButtonIcon} />); }}
                        onPress={() =>  Actions.CreateRecipe() }
                        />
                </ScrollView>
        );
    }
}

export default Home;