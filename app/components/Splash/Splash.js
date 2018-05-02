import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles';
import AnimatedImage from '../../modules/auth/components/AnimatedImage/AnimatedImage';

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <AnimatedImage width={180} height={180}/>
                    <Text style={styles.subText}>
                        Discover and share the joy of cooking with your friends and family in Jan's Kitchen!
                    </Text>
                </View>
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            </View>
        );
    }
}