import React from 'react';
import { Provider } from 'react-redux';
// import { Font, AppLoading } from 'expo';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';

import Router from './app/config/routes'
import store from './app/redux/store';

// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

console.ignoredYellowBox = [
  'Setting a timer'
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    }
  }

  // async _loadAssetsAsync() {
  //   const fontAssets = cacheFonts([
  //     { RobotoExtraBold: require('./app/assets/fonts/Roboto-Black.ttf') },
  //     { RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf') },
  //     { RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf') },
  //     { RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf') },
  //     { RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf') }
  //   ]);

  //   await Promise.all([...fontAssets]);
  // }

  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadAssetsAsync}
    //       onFinish={() => this.setState({ isReady: true })}
    //       onError={console.warn}
    //     />
    //   );
    // }

    return (
      <View style={styles.rootContainer}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // ...Platform.select({
    //   android: {
    //     marginTop: StatusBar.currentHeight
    //   }
    // })
  },
});
