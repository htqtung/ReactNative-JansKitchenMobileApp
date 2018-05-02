import React from 'react';
import {
    View
} from 'react-native';
import {
    FormLabel,
    FormInput,
    Icon,
} from 'react-native-elements';

import styles from './styles';
import { theme } from "../../index";

class IngredientForm extends React.Component {
    render() {
        const { handleIngreInput, handleRemoveButton, value } = this.props;

        return (
            <View style={styles.inlineRow}>
                <FormInput
                    multiline
                    placeholder='100g flour'
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    autoFocus={false}
                    onChangeText={handleIngreInput}
                    containerStyle={styles.freeInputContainer}
                    inputStyle={styles.freeInput}
                    value={value}
                // onKeyPress={(event) => this.handleEnter(event)}
                />
                <Icon
                    name='delete'
                    color={theme.color.red_cherry}
                    onPress={handleRemoveButton}
                />
            </View>
        );
    }
}

export default IngredientForm;