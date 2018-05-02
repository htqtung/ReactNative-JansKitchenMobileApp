import React from 'react';
import { View, Text, Image } from 'react-native';

import { database, auth } from '../../../../config/firebase';
import styles from './styles';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ''
        }
    }
    componentDidMount() {
        database.ref('/version').once("value", snapshot => {
            this.setState({ version: snapshot.val()})
        })
    }

    render() {
        return (
           <View style={styles.container}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require('../../../../assets/images/icon3.png')}
                />
                <Text style={styles.text}>
                    version {this.state.version}
                </Text>
                <Text style={styles.text}> 	&#9400; Tung Huynh </Text>
            </View>
        );
    }
}

export default About;
// return database.ref('/users/' + userId).once('value').then(function(snapshot) {
//     var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
// });