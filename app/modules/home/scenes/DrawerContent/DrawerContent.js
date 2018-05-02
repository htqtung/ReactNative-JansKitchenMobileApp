import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Header,
    Button,
    Icon,

} from 'react-native-elements';

import SettingsButton from '../../components/SettingsButton/SettingsButton';
import DrawerTabView from '../../components/DrawerTabView/DrawerTabView';
import DrawerHeader from '../../components/DrawerHeader/DrawerHeader';

import styles from './styles';

class DrawerContent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    placement='left'
                    leftComponent={ <DrawerHeader /> }
                    rightComponent={ <SettingsButton /> }
                    outerContainerStyles={styles.headerOuter}
                    innerContainerStyles={styles.headerInner}
                />
                <DrawerTabView />
                
            </View>
        );
    }
}

export default DrawerContent;

{/* <Router>
                    <Scene key="root"
                        hideNavBar
                    >
                        <Tabs
                            key="Main"
                            swipeEnabled
                            showLabel={false}
                            tabBarStyle={styles.tabBarStyle}
                            activeBackgroundColor="white"
                            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                        >
                            <Scene key="tab_1" component={TabView2} title="Tab #1" hideNavBar icon={TabIcon} />
                            <Scene key="tab_2" component={TabView2} title="Tab #2" hideNavBar icon={TabIcon} />
                        </Tabs>
                    </Scene>
                </Router> */}

// import {
//     Scene,
//     Router,
//     ActionConst,
//     Stack,
//     Modal,
//     Tabs,
//     Drawer
// } from 'react-native-router-flux';
// import store from '../../../../redux/store';