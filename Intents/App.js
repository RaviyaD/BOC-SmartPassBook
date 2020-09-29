/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './Login';
import Register from './Register';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Dashboard from './Dashboard';

const App = createStackNavigator({
        Login: { screen: Login,
            navigationOptions: {
                headerShown: false
            },
        } ,
        Register: { screen: Register,
            navigationOptions: {
                headerShown: false
            },
        },
        Dashboard: { screen: Dashboard,
            navigationOptions: {
                headerShown: false
            },
        },
    },
    {
        initialRouteName: 'Login',
    });


export default createAppContainer(App);
