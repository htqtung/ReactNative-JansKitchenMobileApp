import React from 'react';
import {
    View
} from 'react-native';
import {
    FormLabel,
    FormInput,
    Icon,
    Badge
} from 'react-native-elements';

import styles from './styles';
import { theme } from "../../index";

class MethodForm extends React.Component {
    render() {
        const { keyProp, handleMethodInput, handleRemoveButton, value, badgeNumber } = this.props;

        return (
            <View style={styles.inlineRow}>
                <View style={styles.methodRow}>
                    <Badge
                        value={badgeNumber + 1}
                        textStyle={{ color: theme.color.white }}
                    />
                    <FormInput
                        multiline
                        placeholder='Write some instructions...'
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                        autoFocus={false}
                        onChangeText={handleMethodInput}
                        containerStyle={styles.freeInputContainer}
                        inputStyle={styles.freeInput}
                        value={value}
                    />
                </View>
                <Icon
                    name='delete'
                    color={theme.color.red_cherry}
                    onPress={handleRemoveButton}
                />
            </View>
        );
    }
}

export default MethodForm;