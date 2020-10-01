import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';
import AccountList from "./AccountList";
import ContactUs from "./ContactUs";
import Interest from "./Interest";
import Drawer from "./Drawer";

class Dashboard extends Component{
    render(){
        return (
            <ContactUs/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    }
});

export default Dashboard;
