import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import NavBar from "./NavBar";


const ChangePassword = ({navigation}) => {
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    const [value2, onChangeText2] = React.useState('');
    const [error, onChangeError] = React.useState('');
    const [showAlert,onChangeAlert] = React.useState(false);

    const [drawerPosition, setDrawerPosition] = React.useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    function show(){
        onChangeAlert(true)
    }

    function hide(){
        onChangeAlert(false)
    }

    const navigationView = (
        <View style={styles.navigationContainer}>
            <NavBar navigation={navigation}/>
        </View>
    );

    function submit() {
        if (value === '123') {
            if (value1 === value2) {
                onChangeAlert(true)
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
                <Text style={{color:'white', fontSize:35, marginTop:'25%'}}>Change Password</Text>
            </View>

            <View style={{ justifyContent: 'center',
                alignItems: 'center'}}>
            <Text style={styles.inputPw1}>Old Password</Text>
                    <TextInput
                        style={styles.inputnew}
                        visible-password={true}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <Text style={styles.inputPw}>New Password</Text>
                    <TextInput
                        style={styles.input}
                        visible-password={true}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={text => onChangeText1(text)}
                        value={value1}
                    />
                    <Text style={styles.inputPw}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        visible-password={true}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={text => onChangeText2(text)}
                        value={value2}
                    />


                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Change Password"
                    message="Change Password Succefully"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="#faee52"
                    onConfirmPressed={() => {
                        onChangeAlert(false)
                       navigation.navigate('AccountList')
                    }}
                />


                    <Text style={styles.errorMsg}>{error}</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => submit()
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                    <Text style={styles.submitButtonText}> Submit </Text>
            </View>
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'25%',
        width: '100%',
        backgroundColor: '#FDC723',
        borderBottomEndRadius:40,
        borderBottomStartRadius:40,
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
    input: {
        margin: 10,
        width: 200,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
    },
    inputPw: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 15,
    }, submitButton: {
        backgroundColor: '#000000',
        padding: 10,
        margin: 15,
        width: 150,
        height: 40,
        borderRadius: 10,
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white',
    }, errorMsg: {
        color: '#800000',
    },inputnew:{
        marginTop: 20,
        width: 200,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
    },inputPw1: {
        textAlign: 'center',
        paddingTop: 45,
        fontSize: 15,
        paddingBottom:0
    }
})

export default ChangePassword;
