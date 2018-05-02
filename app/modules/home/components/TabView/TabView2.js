import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, Button } from "react-native";
import { Actions } from 'react-native-router-flux';

const propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'red',
    },
});

class TabView2 extends React.Component {
    state = { hideNavBar: false }

    toggleNavBar = () => {
        this.setState({ hideNavBar: !this.state.hideNavBar }, () =>
            Actions.refresh({ hideNavBar: this.state.hideNavBar })
        );
    }

    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle]}>
                <Text>Tab title:{this.props.title} name:{this.props.name}</Text>
                <Text>Tab data:{this.props.data}</Text>
                {this.props.name === 'tab_1' &&
                    <Button onPress={() => Actions.tab_2()} title='next screen for tab1_1'/>
                }
                <Button onPress={Actions.pop} title='Back'/>
                <Button onPress={() => { Actions.tab_1(); }} title='Switch to tab1_1' />
                <Button onPress={() => { Actions.tab_2(); }} title='Switch to tab1_2' />
                <Button onPress={() => { Actions.echo(); }} title='push clone scene (EchoView)' />
                <Button onPress={() => { this.toggleNavBar(); }} title='Toggle NavBar' />
            </View>
        );
    }
}
TabView2.propTypes = propTypes;

export default TabView2;