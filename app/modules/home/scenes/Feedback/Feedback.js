import React from 'react';
import { View, Text, Alert } from 'react-native';
import {
    FormInput,
    FormLabel,
    Button
} from 'react-native-elements';
import { auth, database } from '../../../../config/firebase';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            username: '',
            id: '',
        }
    }
    

    componentDidMount() {
        const userId = auth.currentUser.uid;

        database.ref('/users/' + userId).once("value", snapshot => {
            this.setState({ 
                username: snapshot.val().username,
                id: userId
            })
        })
    }

    // writeNewFeedback(user, data, timestamp) {
    writeNewFeedback(username, userId, data, timestamp) {
        // A post entry.
        var feedbackData = {
            author: username,
            uid: userId,
            description: data,
            timestamp: timestamp,
        };

        // Get a key for a new Post.
        var newFeedbackKey = database.ref().child('feedbacks').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/feedbacks/' + newFeedbackKey] = feedbackData;

        return database.ref().update(updates);
    }

    onSubmit = () => {
        if (this.state.input == '') return;
        let timestamp = Date();
        this.writeNewFeedback(this.state.username, this.state.id, this.state.input, timestamp);
        Actions.pop();
    }

    render() {
        return (
           <View style={styles.container}>
                <View style={styles.inputFrame}>
                    <FormInput
                        placeholder='Tell us how to improve your experience...'
                        inputStyle={styles.inputText}
                        containerStyle={styles.inputContainer}
                        multiline
                        autoFocus
                        onChangeText={(text) => this.setState({ input: text })}
                    />
                </View>
                <Button
                    raised
                    title='SUBMIT'
                    borderRadius={5}
                    containerViewStyle={styles.buttonContainerView}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    onPress={this.onSubmit} />
            </View>
        );
    }
}

export default Feedback;