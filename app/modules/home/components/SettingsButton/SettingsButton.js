import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Button,
    Icon,
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class SettingsButton extends React.Component {
    render() {
        return (
            <Icon
                name='settings'
                color='#FFF'              
                // onPress={() => this.props.setModalVisible(true)}
                onPress={() => Actions.Settings()}
                iconStyle={{padding: 16}}
            />
        );
    }
}

export default SettingsButton;