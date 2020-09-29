import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, StyleSheet,
} from 'react-native';

class Dashboard extends Component{
    render(){
        return (
            <View styles={styles.container}>
                <Text> Account list eka sata sata gaala enna one..</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    }
});

export default Dashboard;
