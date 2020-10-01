import React, {Component, useState} from 'react';
import {View, StyleSheet, Button, DrawerLayoutAndroid, Text, ImageBackground} from 'react-native';
import {ImageButton} from 'react-native-image-button-text';
import NavBar from "./NavBar";

const ContactUs = () => {

    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = (
        <View style={styles.navigationContainer}>
            <NavBar />
        </View>
    );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={() => navigationView}>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <View style={styles.innercontainer}>
                        <View style={styles.title}>
                        <Text style={styles.titleText}>CONTACT OUR TEAM</Text>
                    </View>
                    <Text style={styles.accName}>OUR EMERGENCY HELP</Text>
                    <View style={styles.divider} />
                    <Text style={styles.accNum}>+94 2233445</Text>
                    <Text style={styles.accName}>OUR ACCOUNTS TEAM</Text>
                    <View style={styles.divider} />
                    <Text style={styles.accNum}>+94 2233446</Text>
                    <Text style={styles.accName}>OUR HR TEAM</Text>
                    <View style={styles.divider} />
                    <Text style={styles.accNum}>+94 2233447</Text>
                    <View style={styles.addressBlock}>
                        <Text style={{fontSize: 25, margin: '5%'}}>VISIT US</Text>
                        <Text style={{fontSize: 20, marginLeft: '5%'}}>20A</Text>
                        <Text style={{fontSize: 20, marginLeft: '5%'}}>BOC ROAD</Text>
                        <Text style={{fontSize: 20, marginLeft: '5%'}}>COL-01</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            height: '80%',
                            width: '80%',
                        }}>
                        <ImageButton
                            style={{marginTop: 10, borderColor: '#000000'}}
                            width={'40%'}
                            height={'30%'}
                            text=""
                            source={require('../assets/twitter-logo.jpg')}
                        />
                        <ImageButton
                            style={{marginTop: 10, borderColor: '#000000'}}
                            width={'40%'}
                            height={'30%'}
                            text=""
                            source={require('../assets/facebook-logo.png')}
                        />
                        <ImageButton
                            style={{marginTop: 10, borderColor: '#000000'}}
                            width={'40%'}
                            height={'30%'}
                            text=""
                            source={require('../assets/insta-logo.jpg')}
                        />
                    </View>
                    </View>
                </ImageBackground>
                </View>
            </DrawerLayoutAndroid>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faee52',
    },
    innercontainer: {
        width: '95%',
        height: '95%',
        backgroundColor: 'white',
        marginTop: 20,
    },
    navbutton: {
        flex: 1,
        position: 'absolute',
        top: 0,
        margin: 30,
    },
    button: {
        backgroundColor: '#841584',
    },
    title: {
        color: '#000000',
        top: 5,
        marginLeft: '15%',
        marginTop: '20%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    accName: {
        fontSize: 20,
        marginTop: '5%',
        marginLeft: '10%',
        fontWeight: 'bold',
        color: '#000000',
    },
    divider: {
        borderWidth: 2,
        width: '80%',
        marginLeft: '10%',
        borderColor: '#ff9933',
    },
    accNum: {
        fontSize: 20,
        marginLeft: '10%',
    },
    addressBlock: {
        width: '50%',
        height: '20%',
        borderColor: '#ff9933',
        backgroundColor: '#ffcc00',
        marginLeft: '10%',
        marginTop: '10%',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ContactUs;
