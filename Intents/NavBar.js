import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
import {Component} from 'react';

export default class NavBar extends Component{
    render(){
        return (
            <View>
                <Text style={styles.title}>SMART</Text>
                <Text style={styles.passbook}>PASSBOOK</Text>
                <View
                    style={{
                        flexDirection: 'column',
                        position: 'absolute',
                        marginTop: '40%',
                        marginLeft: '2%',
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="list-circle-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            ACCOUNT LIST
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="settings-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            SETTINGS
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="megaphone-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            CONTACT US
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="chatbubbles-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            FAQ
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="cash-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            INTEREST
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {/*<Icon name="document-text-outline" size={50} />*/}
                        <Text style={{fontSize: 20, marginLeft: '5%', marginTop: '4%'}}>
                            TERMS AND COND.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    title: {
        color: '#faee52',
        fontSize: 44,
        top: 5,
        marginLeft: '7%',
        marginTop: '5%',
    },
    passbook: {
        color: '#000000',
        fontSize: 30,
        marginLeft: '7%',
    },
    imageView: {
        width: '15%',
        height: '120%',
        marginLeft: '7%',
    },
});
