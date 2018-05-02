import React from 'react';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
    Icon,
    Button
} from 'react-native-elements';
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import styles from './styles';
import { theme } from "../../index";
import IngredientForm from '../IngredientForm/IngredientForm';
import MethodForm from '../MethodForm/MethodForm';

class NewRecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: [
                { key: 0, content: '' },
                { key: 1, content: '' },
                { key: 2, content: '' },
            ],
            method: [
                { key: 0, content: ''},
            ],
            title: '',
            description: '',
            servings: '',
            timeToCook: '',
            titleErr: '', 
            desErr: '', 
            ingreErr: '', 
            methErr: '' 
        }
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleRemoveButton = this.handleRemoveButton.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleIngreInput = this.handleIngreInput.bind(this);
        this.handleMethodInput = this.handleMethodInput.bind(this);
    }

    handleAddButton = (place , text) => {
        if(place == 'ingredient') {
            let newlyAddedData = { 
                key: this.state.ingredient[this.state.ingredient.length - 1].key + 1,
                placeholder: text,
                content: ''
            };

            this.setState({
                ingredient: [...this.state.ingredient, newlyAddedData]
            });
        }
        if(place == 'method') {
            let newlyAddedData = {
                key: this.state.method[this.state.method.length - 1].key + 1,
                placeholder: text,
                content: ''
            };

            this.setState({
                method: [...this.state.method, newlyAddedData]
            });
        }
    }

    handleRemoveButton = (object, id) => {
        if (object == 'ingredient' && this.state.ingredient.length > 1) {
            let result = this.state.ingredient.filter((data) => data.key !== id );

            this.setState({
                ingredient: result,
            });
        }
        else if (object == 'method' && this.state.method.length > 1) {
            let result = this.state.method.filter((data) => data.key !== id);

            this.setState({
                method: result
            });
        }
    }

    // handleEnter = (event) => {
    //     if(event.nativeEvent.key == 'Enter') {
    //         this.handleAddButton('ingredient', '100g flour');
    //     }
    // }
    
    handleInput = (state, text) => {
        if(text != '') {
            switch (state) {
                case 'title':
                    this.setState({
                        titleErr: ''
                    })
                case 'description':
                    this.setState({
                        desErr: ''
                    })
            }
        }
        this.setState({
            [state]:text,
        });
    }

    handleIngreInput = (key, text) => {
        if (text != '') {
            this.setState({
                ingreErr: ''
            })
        }
        const newIngre = this.state.ingredient.map((item, itemId) => {
            if (key !== itemId) return item;
            // this is gonna create a new object, that has the fields from
            // `s`, and `name` set to `newName`
            return { ...item, content: text };
        });

        this.setState({ ingredient: newIngre });
    }

    handleMethodInput = (key, text) => {
        if (text != '') {
            this.setState({
                methErr: ''
            })
        }
        const newMethod = this.state.method.map((item, itemId) => {
            if (key !== itemId) return item;
            // this is gonna create a new object, that has the fields from
            // `s`, and `name` set to `newName`
            return { ...item, content: text };
        });

        this.setState({ method: newMethod });
    }

    //return the data from the form to the caller
    onSubmit = () => {
        //Check if the content is at least sufficient for a recipe
        if( this.state.title != '' && 
            this.state.description != '' && 
            this.state.ingredient[0].content != '' && 
            this.state.method[0].content != '') 
        {
            this.props.onSubmit(this.state);
            this.setState({
                title: '',
                description: '',
                ingredient: [
                    { key: 0, content: '' },
                    { key: 1, content: '' },
                    { key: 2, content: '' },
                ],
                method: [
                    { key: 0, content: '' },
                ],
                servings: '',
                timeToCook: '',
            })
        }
        else {
            if (this.state.title == '') {
                this.setState({
                    titleErr: 'Please add a title to your recipe',
                })
            }
            if (this.state.description == '') {    
                this.setState({
                    desErr: 'Please add some description to your recipe so others can understand it better',
                })
            }
            if (this.state.ingredient[0].content == '') {
                this.setState({
                    ingreErr: 'Ingredient cannot be empty'
                })
            }
            if (this.state.method[0].content == '') {
                this.setState({
                    methErr: 'Method cannot be empty'
                })
            }
        }
    }

    render() {
        let newIngrePos = this.state.ingredient.map((data, index) => {
            return (
                <IngredientForm 
                    key={data.key}
                    handleIngreInput={(text) => this.handleIngreInput(data.key, text)}
                    value={data.content}
                    handleRemoveButton={() => this.handleRemoveButton('ingredient', data.key)}
                />
            )
        });
        let newMethodPos = this.state.method.map((data, index) => {
            return (
                <MethodForm
                    key={data.key}
                    keyProp={data.key}
                    badgeNumber={index}
                    handleMethodInput={(text) => this.handleMethodInput(data.key, text)}
                    value={data.content}
                    handleRemoveButton={() => this.handleRemoveButton('method', data.key)}
                />
            )
        });

        return (
            <View style={styles.container}>
                <FormInput
                    placeholder='Recipe Title...'
                    inputStyle={styles.recipeTitle}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    autoFocus={false}
                    onChangeText={(text) => this.handleInput('title', text)} 
                />
                <FormValidationMessage>{this.state.titleErr}</FormValidationMessage>
                <FormInput
                    placeholder='Tell the story of the recipe...'
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    autoFocus={false}
                    multiline
                    inputStyle={styles.recipeDescription}
                    onChangeText={(text) => this.handleInput('description', text)}
                />
                <FormValidationMessage>{this.state.desErr}</FormValidationMessage>
                <View style={styles.TopRow}>
                    <FormLabel 
                        labelStyle={styles.multilineLabel}
                    >
                            Ingredient
                    </FormLabel>
                    <FormInput
                        placeholder='How many servings?'
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                        autoFocus={false}
                        keyboardType='numeric'
                        onChangeText={(text) => this.handleInput('servings', text)}
                        inputStyle={styles.additionalInfo}
                        containerStyle={styles.additionalInfoContainer}
                    />
                </View>
                <View style={styles.multilineInput}>
                    {newIngrePos}
                </View>
                <FormValidationMessage>{this.state.ingreErr}</FormValidationMessage>
                <TouchableHighlight 
                    style={styles.touchable}
                    onPress={() => this.handleAddButton('ingredient','100g flour')}
                    underlayColor={theme.color.red100}
                >
                    <Text style={styles.multilineTouchable}> + Add ingredient </Text>
                </TouchableHighlight>
                <View style={styles.TopRow}>
                    <FormLabel 
                        labelStyle={styles.multilineLabel}
                    >
                            Method
                    </FormLabel>
                    <FormInput
                        placeholder='How long to cook?'
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                        autoFocus={false}
                        onChangeText={(text) => this.handleInput('timeToCook', text)}
                        inputStyle={styles.additionalInfo}
                        containerStyle={styles.additionalInfoContainer}
                    />
                </View>
                <View style={styles.multilineInput}>
                    {newMethodPos}
                </View>
                <FormValidationMessage>{this.state.methErr}</FormValidationMessage>
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={() => this.handleAddButton('method', 'Write instructions...')}
                    // underlayColor={styles.touchableUnderlayColor}
                    underlayColor={theme.color.red100}
                >
                    <Text style={styles.multilineTouchable}> + Add step </Text>
                </TouchableHighlight>
                <Button
                    raised
                    title='SAVE'
                    borderRadius={5}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    onPress={this.onSubmit} />
                <FormValidationMessage>{this.props.error['general']}</FormValidationMessage>
            </View>
        );
    }
}

export default NewRecipeForm;