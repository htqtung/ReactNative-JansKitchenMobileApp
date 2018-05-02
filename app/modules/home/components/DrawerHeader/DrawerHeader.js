import React from 'react';
import {
    View,
} from 'react-native';
import {
    Avatar,
    Text
} from 'react-native-elements';
import { database, auth } from '../../../../config/firebase';

import styles from './styles';

const defaultAvatar = "https://firebasestorage.googleapis.com/v0/b/jankitchenmobile.appspot.com/o/avatar.jpg?alt=media&token=11b20b64-61ac-4791-bd09-686005db0f41";

class DrawerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }
    
    componentDidMount() {
        const userId = auth.currentUser.uid;

        database.ref('/users/' + userId).once("value", snapshot => {
            this.setState({ username: snapshot.val().username })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Avatar
                    small
                    rounded
                    title="LT"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                /> */}
                <Avatar
                    medium
                    rounded
                    source={{ uri: defaultAvatar }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                {/*username length max 20 character*/}
                <Text style={styles.username}>{this.state.username}</Text>
            </View>
        );
    }
}

export default DrawerHeader;