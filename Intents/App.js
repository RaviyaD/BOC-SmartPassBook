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
import Chatbot from "./FAQ/Chatbot"
import TransactionHistory from "./TransactionHistory";
import Settings from "./Settings";
import ChangePassword from "./ChangePassword";
import AccountAnalysis from "./AccountAnalysis";
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7shzS2c495ES4MS-QUchZfL1LN8QExq8",
    authDomain: "boc-sp.firebaseapp.com",
    databaseURL: "https://boc-sp.firebaseio.com",
    projectId: "boc-sp",
    storageBucket: "boc-sp.appspot.com",
    messagingSenderId: "997751638487",
    appId: "1:997751638487:web:d95b63363b2ea16f22e392"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
        FaqMain: { screen: FaqMain,
            navigationOptions: {
                headerShown: false
            },
        },
        Chatbot: { screen: Chatbot,
            navigationOptions: {
                headerShown: false
            },
        },
        AccountAnalysis: { screen: AccountAnalysis,
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
        TransactionHistory:{ screen: TransactionHistory,
            navigationOptions: {
                headerShown: false
            },
        },
        Settings : { screen: Settings,
            navigationOptions: {
                headerShown: false
            },
        },
        ChangePassword : {screen : ChangePassword,
            navigationOptions: {
                headerShown: false
            },
        }
    },
    {
        initialRouteName: 'Login',
    });


export default createAppContainer(App);
