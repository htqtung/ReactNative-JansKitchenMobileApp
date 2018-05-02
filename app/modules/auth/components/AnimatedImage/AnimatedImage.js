import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Animated,
    Easing
} from 'react-native';


export default class AnimatedImage extends React.Component {
    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0.3)
    }

    componentDidMount() {
        this.spring();
    }

    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1,
                tension: 1
            }
        ).start()
    }

    render() {
        return (
            <Animated.Image
                source={require('../../../../assets/images/icon3.png')}
                style={{ width: this.props.width, height: this.props.height, transform: [{ scale: this.springValue }] }}
            /> 
        );
    }
}
