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
                <Text> board</Text>
                <Text onPress={() => this.props.navigation.navigate('AccountSettings',{
                    AccountNo: 88299878
                })}>Account settings</Text>
                <Text onPress={() => this.props.navigation.navigate('TermsConditions')}>Terms&condition</Text>
                <Text onPress={() => this.props.navigation.navigate('FAQ')}>FAQ</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        textAlign: 'center'
    }
});

export default Dashboard;
