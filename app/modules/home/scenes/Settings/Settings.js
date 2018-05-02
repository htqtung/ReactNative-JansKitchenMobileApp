import React from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import {
    Button,
    Icon,
    ListItem
} from 'react-native-elements';
import { actions as auth, theme } from "../../../auth/index";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from './styles';

const { signOut } = auth;

const { color } = theme;

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {}

        this.onSignOut = this.onSignOut.bind(this);
    }
    
    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.reset("Auth")
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    render() {
        return (
                <View style={styles.container}>
                    <View>
                        < View >
                        <ListItem
                            key='editProfile'
                            hideChevron
                            title= 'Edit Profile'
                            leftIcon={{ name: 'account-circle', color: color.grey3 }}
                        />
                        <ListItem
                            key='privacyPolicy'
                            hideChevron
                            title='Privacy Policy'
                            onPress={() => Actions.PrivacyPolicy()}
                            leftIcon={{ name: 'security', color: color.grey3 }}
                        />
                        <ListItem
                            key='service'
                            hideChevron
                            title='Term of Service'
                            onPress={() => Actions.Service()}
                            leftIcon={{ name: 'room-service', color: color.grey3 }}
                        />
                        <ListItem
                            key='feedback'
                            hideChevron
                            title='Feedback'
                            onPress={() => Actions.Feedback()}
                            leftIcon={{ name: 'feedback', color: color.grey3 }}
                        />
                        <ListItem
                            key='about'
                            hideChevron
                            title='About this Application'
                            onPress={() => Actions.About()}
                            leftIcon={{ name: 'info-outline', color: color.grey3 }}
                        />
                        </View >
                        <Button
                            raised
                            borderRadius={4}
                            title={'LOG OUT'}
                            containerViewStyle={[styles.containerView]}
                            buttonStyle={[styles.button]}
                            textStyle={styles.buttonText}
                            onPress={this.onSignOut} />
                    </View>
                </View>
        );
    }
}

export default connect(null, { signOut }) (Settings);