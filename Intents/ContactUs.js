import React, {Component, useState} from 'react';
import {View, StyleSheet, Button, DrawerLayoutAndroid, Text, ImageBackground, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import NavBar from "./NavBar";

const ContactUs = ({navigation}) => {
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
            <NavBar navigation={navigation} />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}>
            <View style={styles.container}>
                <Text style={{color:'white', fontSize:35, marginTop:'10%', marginLeft:'25%'}}>Get In Touch</Text>
                <Image style={{ borderColor: '#000000', borderRadius: 30, width: 120, height: 120, marginLeft:'35%', borderWidth: 2, marginTop:'5%'}} source={require('../assets/tele.png')}/>
            </View>
            <View>
                <View style={{marginLeft:'45%', marginTop:'3%'}}>
                    <Icon name="old-phone" size={25} color="#ff0055" />
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99', fontWeight: 'bold'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR EMERGENCY HELP</Text> </Text>
                    <Text style={{marginLeft:'15%', fontSize:15}}>+94 2233445</Text>
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR ACCOUNTS TEAM </Text> </Text>
                    <Text style={{marginLeft:'15%', fontSize:15}}>+94 2233446</Text>
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR HR TEAM </Text> </Text>
                    <Text style={{marginLeft:'15%', fontSize:15}}>+94 2233447</Text>
                </View>
            </View>
            <View>
                <View style={{marginLeft:'45%', marginTop:'3%'}}>
                    <Icon name="location-pin" size={25} color="#ff0055" />
                </View>
                <View style={{ marginTop:'2%'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold',marginLeft:'25%'}}>REGISTERED HEAD OFFICE:</Text>
                    <Text style={{fontSize: 13,marginLeft:'35%'}}>Bank Of Ceylon,</Text>
                    <Text style={{fontSize: 13,marginLeft:'35%'}}>No.1,BOC Square,</Text>
                    <Text style={{fontSize: 13,marginLeft:'35%'}}>Bank of Ceylon Mawatha,</Text>
                    <Text style={{fontSize: 13,marginLeft:'35%'}}>Colombo 01</Text>
                    <Text style={{fontSize: 13,marginLeft:'35%'}}>Sri Lanka</Text>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-end', marginTop:'6%', marginLeft:'87%'}}>
                    <View style={{width:50, height:50, borderWidth:2,borderRadius: 30}}>
                        <Image style={{width:47, height:47, borderWidth:3,borderRadius: 30}} source={require('../assets/twitter-logo.jpg')}/>
                    </View>
                    <View style={{width: 50, height: 50, borderWidth:2, borderRadius: 30}}>
                        <Image style={{width:47, height:47, borderWidth:3,borderRadius: 30}} source={require('../assets/facebook-logo.png')}/>
                    </View>
                    <View style={{width: 50, height: 50, borderWidth:2, borderRadius: 30}}>
                        <Image style={{width:46, height:45, borderWidth:3,borderRadius: 30}} source={require('../assets/insta-logo.jpg')}/>
                    </View>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'35%',
        width: '100%',
        backgroundColor: '#faee52',
    },
});

export default ContactUs;
