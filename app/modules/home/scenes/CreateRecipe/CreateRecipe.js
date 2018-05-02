import React from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    Platform,
    Image,
    ActivityIndicator,
    View,
    Alert,
    AsyncStorage
} from 'react-native';
import {
    Tile
} from 'react-native-elements';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import { auth, database, storage } from '../../../../config/firebase';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';

import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import uploadTile from '../../../../assets/images/upload.jpg';
// import { actions } from '../../index';
// const { createRecipe } = actions;

import styles from './styles';

const Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
const fs = RNFetchBlob.fs;

const uploadImage = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        //create a reference in firebase storage for the file
        const imageRef = storage.ref('images').child(`${sessionId}`)

        //encode data with base64 prior to uploading
        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            //place the blob into your storage reference
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            //from here you can get the download url of the image
            //to store a reference to it in your database
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
                //this storeReference function is an optional helper
                //method you can create to store a reference to the download url
                //of the image in your database
                //storeReference(url, sessionId)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const error = {
    general: "",
    recipe: "",
}

class CreateRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: error,
            id: '',
            username: '',
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

    pickImage() {
        this.setState({ uploadURL: '' })

        ImagePicker.launchImageLibrary({}, response => {
            uploadImage(response.uri)
                .then(url => this.setState({ uploadURL: url }))
                .catch(error => console.log(error))
        })
    }

    writeNewPost(username, uid, data, photo, timestamp) {
        // A post entry.
        if(photo === null) photo = '';
        var recipeData = {
            author: username,
            uid: uid,
            title: data.title,
            description: data.description,
            servings: data.servings,
            timeToCook: data.timeToCook,
            ingredient: data.ingredient,
            method: data.method,
            loveCount: 0,
            timestamp: timestamp,
            href: photo,
        };

        // Get a key for a new Post.
        var newRecipeKey = database.ref().child('recipes').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/recipes/' + newRecipeKey] = recipeData;
        updates['/user-recipes/' + uid + '/' + newRecipeKey] = newRecipeKey;

        return database.ref().update(updates);
    }

    onSubmit = (data) => {
        const userData = auth.currentUser;
        let timestamp = new Date();
        this.writeNewPost(this.state.username, this.state.id, data, this.state.uploadURL, timestamp);
        Actions.pop();
    }

    onSuccess() {
        Actions.Home();
    }

    onError(error) {
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }

        this.setState({ error: errObj });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Tile
                    imageSrc={{ require: '../../../../assets/images/upload.png' }}
                    icon={{ name: 'photo-camera', size: 100, color: '#eee' }}
                    featured
                    onPress={() => this.pickImage()}
                />
                {
                    (() => {
                        switch (this.state.uploadURL) {
                            case null:
                                return null
                            case '':
                                return <ActivityIndicator />
                            default:
                                return (
                                    <View>
                                        <Image
                                            source={{ uri: this.state.uploadURL }}
                                            style={styles.image}
                                        />
                                        <Text>{this.state.uploadURL}</Text>
                                    </View>
                                )
                        }
                    })()
                }
                <NewRecipeForm 
                    onSubmit={this.onSubmit}
                    error={this.state.error}
                />
            </ScrollView>
        );
    }
}

export default CreateRecipe;
// export default connect(null, { createRecipe })(CreateRecipe);