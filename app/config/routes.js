import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    Icon 
} from 'react-native-elements';
import { 
    Scene, 
    Router, 
    ActionConst, 
    Stack, 
    Modal, 
    Tabs,
    Drawer
} from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';
import Home from '../modules/home/scenes/Home';
import DrawerContent from '../modules/home/scenes/DrawerContent/DrawerContent';
import Settings from '../modules/home/scenes/Settings/Settings';
import CreateRecipe from '../modules/home/scenes/CreateRecipe/CreateRecipe';
import BookmarkList from '../modules/home/components/BookmarkList/BookmarkList';
import Gallery from '../modules/home/components/Gallery/Gallery';
import UserRecipe from '../modules/home/components/UserRecipe/UserRecipe';
import PrivacyPolicy from '../modules/home/scenes/PrivacyPolicy/PrivacyPolicy';
import Feedback from '../modules/home/scenes/Feedback/Feedback';
import Service from '../modules/home/scenes/Service/Service';
import About from '../modules/home/scenes/About/About';

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { 
    color, 
    navTitleStyle,
    windowWidth
} from "../styles/theme";

const drawerWidth = windowWidth * 80 / 100;

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({ isReady: true, isLoggedIn });
        }));
    }

    render() {
        if (!this.state.isReady)
            return <Splash />

        return (
            <Router>
                <Scene key="root" 
                    hideNavBar
                    navigationBarStyle={{ backgroundColor: "#fff" }}
                    titleStyle={navTitleStyle}
                    backButtonTintColor={color.red_cherry}
                >
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar />
                        <Scene key="Register" component={Register} title="Register" back />
                        <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username" back={false} />
                        <Scene key="Login" component={Login} title="Login" />
                        <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password" />
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn}>
                        <Drawer
                            hideNavBar
                            key="drawer"
                            contentComponent={DrawerContent}
                            // drawerImage={MenuIcon}
                            drawerIcon ={<Icon name='more-vert'color={color.red_cherry} />}
                            drawerWidth={drawerWidth}
                            drawerPosition="right"
                        >
                            <Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE} />
                        </Drawer>
                        <Scene key="UserRecipe" component={UserRecipe} />
                        <Scene key="Bookmark" component={BookmarkList} />
                        <Scene key="Gallery" component={Gallery} />
                        <Scene key="Settings" component={Settings} title="Settings" back />
                        <Scene key="PrivacyPolicy" component={PrivacyPolicy} title="Privacy Policy" back />
                        <Scene key="Service" component={Service} title="Term of Service" back />
                        <Scene key="Feedback" component={Feedback} title="Feedback" back />
                        <Scene key="About" component={About} title="About" back />
                        <Scene key="CreateRecipe" component={CreateRecipe} back />
                    </Stack>
                    
                </Scene>
            </Router>
        )
    }
}
{/*  const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

                   <Scene hideNavBar panHandlers={null}>
                                <Tabs
                                    key="tabbar"
                                    swipeEnabled
                                    showLabel={false}
                                    tabBarStyle={styles.tabBarStyle}
                                    activeBackgroundColor="white"
                                    inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                                >
                                    <Stack
                                        key="tab_1"
                                        title="Tab #1"
                                        tabBarLabel="TAB #1"
                                        inactiveBackgroundColor="#FFF"
                                        activeBackgroundColor="#DDD"
                                        icon={TabIcon}
                                        navigationBarStyle={{ backgroundColor: 'green' }}
                                        titleStyle={{ color: 'white', alignSelf: 'center' }}
                                    >
                                        <Scene
                                            key="tab_1_1"
                                            component={TabView2}
                                            title="Tab #1_1"
                                            onRight={() => alert('Right button')}
                                            rightTitle="Right"

                                        />

                                        <Scene
                                            key="tab1_2"
                                            component={TabView2}
                                            title="Tab #1_2"
                                            back
                                            titleStyle={{ color: 'black', alignSelf: 'center' }}
                                        />
                                    </Stack>

                                    <Stack
                                        key="tab_2"
                                        title="Tab #2"
                                        icon={TabIcon}
                                        initial
                                    >
                                        <Scene
                                            key="tab_2_1"
                                            component={TabView2}
                                            title="Tab #2_1"
                                            renderRightButton={() => <Text>Right</Text>}
                                        />
                                        <Scene
                                            key="tab_2_2"
                                            component={TabView2}
                                            title="Tab #2_2"
                                            onBack={() => alert('onBack button!')}
                                            hideDrawerButton
                                            backTitle="Back!"
                                            panHandlers={null}
                                        />
                                    </Stack>
                                </Tabs>
                            </Scene> */}