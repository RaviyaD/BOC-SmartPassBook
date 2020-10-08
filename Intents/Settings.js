import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Button} from 'native-base'
import NavBar from "./NavBar";

const Settings = ({navigation}) => {
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    const [value2, onChangeText2] = React.useState('');
    const [error, onChangeError] = React.useState('');

    const [drawerPosition, setDrawerPosition] = React.useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = (
        <View style={styles.navigationContainer}>
            <NavBar navigation={navigation}/>
        </View>
    );

    function submit() {
        if (value === '123') {
            if (value1 === value2) {

            } else {
                onChangeError('New Password is not match')
            }
        } else {
            onChangeError('Current Password is incorrect')
        }
    }

    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}>
            <View style={styles.container}>
                <Text style={{color:'white', fontSize:35, marginTop:'10%'}}>Settings</Text>
            </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button info large style={{
                            width: '70%', justifyContent: 'center',
                            alignItems: 'center', marginTop: 40,left:'40%'
                        }}
                                onPress={() => {
                                    navigation.navigate('ChangePassword');
                                }}
                        >
                            <Text style={{
                                textAlign: 'center',
                                left: 8,
                                fontSize: 18,
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}> Change Password </Text>
                        </Button>
                        <Text style={{
                            textAlign: 'center', width: 250,
                            paddingTop: 0,
                            fontSize: 15, color: '#d26969', fontStyle: 'italic'
                        }}>You can change your pin and make your account more secure </Text>

                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button info large style={{
                            width: '70%', textAlign: 'center', justifyContent: 'center',
                            alignItems: 'center', marginTop: 40,left:'40%'
                        }}>
                            <Text style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                left: 8,
                                fontSize: 18,
                                fontWeight: 'bold',
                                fontStyle: 'italic'
                            }}> Deactivate Device </Text>
                        </Button>
                        <Text style={{
                            textAlign: 'center', width: 250,
                            paddingTop: 0,
                            fontSize: 15, color: '#d26969', fontStyle: 'italic'
                        }}>You can delete your account from your device </Text>
                    </View>

        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'35%',
        width: '100%',
        backgroundColor: '#faee52',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topic: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    }, backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        margin: 20

    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: '#f6f1f1',
        width: 250,
        top: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default Settings;
