import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


const ChangePassword = () => {
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    const [value2, onChangeText2] = React.useState('');
    const [error, onChangeError] = React.useState('');

    function submit(){
        if(value === '123'){
            if(value1 === value2){

            }else {
                onChangeError('New Password is not match')
            }
        }else {
            onChangeError('Current Password is incorrect')
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                <Text style={styles.topic}>Change Password</Text>
                <Text style={styles.inputPw}>Password</Text>
                <TextInput
                    style={styles.input}
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

                <Text style={styles.errorMsg}>{error}</Text>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => submit()
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <Text style={styles.submitButtonText}> Submit </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        paddingTop: 35,
        fontSize: 15,
    },submitButton: {
        backgroundColor: '#000000',
        padding: 10,
        margin: 15,
        width:150,
        height: 40,
        borderRadius: 10,
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white',
    },errorMsg: {
        color: '#800000',
    },
})

export default ChangePassword;
