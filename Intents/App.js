/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './Login';
import ContactUs from "./ContactUs";
import Registration from './Registration';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Dashboard from './Dashboard';
import AccountList from "./AccountList";
import Interest from "./Interest";
import Drawer from "./Drawer";
import NavBar from "./NavBar";
import AccountSettings from './AccountSettings';
import TermsConditions from './Terms&Conditions';
import FaqMain from "./FAQ/FaqMain";


const App = createStackNavigator({
        Login: { screen: Login,
            navigationOptions: {
                headerShown: false
            },
        } ,
        Register: { screen: Registration,
            navigationOptions: {
                headerShown: false
            },
        },
        Dashboard: { screen: Dashboard,
            navigationOptions: {
                headerShown: false
            },
        },
        AccountList: { screen: AccountList,
            navigationOptions: {
                headerShown: false
            },
        },
        ContactUs: { screen: ContactUs,
            navigationOptions: {
                headerShown: false
            },
        },
        FAQ: { screen: FaqMain,
            navigationOptions: {
                headerShown: false
            },
        },
        Interest: { screen: Interest,
            navigationOptions: {
                headerShown: false
            },
        },
        Drawer: { screen: Drawer,
            navigationOptions: {
                headerShown: false
            },
        },
        NavBar: { screen: NavBar,
            navigationOptions: {
                headerShown: false
            },
        },
        AccountSettings: { screen: AccountSettings,
            navigationOptions: {
                headerShown: false
            },
        },
        TermsConditions: { screen: TermsConditions,
            navigationOptions: {
                headerShown: false
            },
        },
    },
    {
        initialRouteName: 'Login',
    });


export default createAppContainer(App);
