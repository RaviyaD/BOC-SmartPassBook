import React, {Component, useState} from 'react';
import {
    View,
    StyleSheet,
    Button,
    DrawerLayoutAndroid,
    Text,
    ImageBackground,
    Linking,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import NavBar from "./NavBar";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

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
                <Image style={{ borderColor: '#000000', borderRadius: 30, width: 120, height: 120, marginLeft:'35%', borderWidth: 2}} source={require('../assets/tele.png')}/>
            </View>
            <View>
                <View style={{marginLeft:'45%', marginTop:'15%'}}>
                    <Icon name="old-phone" size={25} color="#ff0055" />
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99', fontWeight: 'bold'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR EMERGENCY HELP</Text> </Text>
                    <View style={{flexDirection: 'row'}} onPress={()=>{Linking.openURL('tel:0112204444');}}>
                        <View style={{ marginLeft:'10%', marginTop:'2%'}}>
                            <SimpleLineIcons name="call-out" size={15} color="#ff0055" />
                        </View>
                    <Text style={{ marginLeft:'3%',fontSize:17, color:'blue', textDecorationLine: 'underline'}}>+94 2204444</Text>
                    </View>
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR ACCOUNTS TEAM </Text> </Text>
                    <View style={{flexDirection: 'row'}} onPress={()=>{Linking.openURL('tel:0112204444');}}>
                        <View style={{ marginLeft:'10%', marginTop:'2%'}}>
                            <SimpleLineIcons name="call-out" size={15} color="#ff0055" />
                        </View>
                        <Text style={{ marginLeft:'3%',fontSize:17, color:'blue', textDecorationLine: 'underline'}}>+94 2204445</Text>
                    </View>
                </View>
                <View style={{marginLeft:'25%', marginTop:'2%'}}>
                    <Text style={{fontSize:15}}><Text style={{color:'#ffcc99'}}>{'\u2B24'}</Text> <Text style={{color:'black', fontWeight: 'bold'}}>OUR HR TEAM </Text> </Text>
                    <View style={{flexDirection: 'row'}} onPress={()=>{Linking.openURL('tel:0112204444');}}>
                        <View style={{ marginLeft:'10%', marginTop:'2%'}}>
                            <SimpleLineIcons name="call-out" size={15} color="#ff0055" />
                        </View>
                        <Text style={{ marginLeft:'3%',fontSize:17, color:'blue', textDecorationLine: 'underline'}}>+94 2204446</Text>
                    </View>
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
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-end', marginTop:'6%', marginLeft:'85%'}}>
                <TouchableOpacity onPress={() =>Linking.openURL("https://twitter.com/ebankofceylon?lang=en")}>
                <View style={{width:50, height:50, borderWidth:2,borderRadius: 30}}>
                        <Image style={{width:47, height:47, borderWidth:3,borderRadius: 30}} source={require('../assets/twitter-logo.jpg')}/>
                </View>
                 </TouchableOpacity>
                <TouchableOpacity onPress={() =>Linking.openURL("https://www.facebook.com/BANKOFCEYLON/")}>
                    <View style={{width: 50, height: 50, borderWidth:2, borderRadius: 30}}>
                        <Image style={{width:47, height:47, borderWidth:3,borderRadius: 30}} source={require('../assets/facebook-logo.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>Linking.openURL("https://www.instagram.com/bocofficial/?hl=en")}>
                    <View style={{width: 50, height: 50, borderWidth:2, borderRadius: 30}}>
                        <Image style={{width:46, height:45, borderWidth:3,borderRadius: 30}} source={require('../assets/insta-logo.jpg')}/>
                    </View>
                </TouchableOpacity>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'25%',
        width: '100%',
        backgroundColor: '#faee52',
        borderBottomEndRadius:40,
        borderBottomStartRadius:40
    },
});

export default ContactUs;
