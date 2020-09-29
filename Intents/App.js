/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './Login';
import Registration from './Registration';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Dashboard from './Dashboard';
import AccountSettings from './AccountSettings';
import TermsConditions from './Terms&Conditions';

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
