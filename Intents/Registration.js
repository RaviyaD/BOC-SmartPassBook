import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, ToastAndroid,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import * as firebase from "firebase";

class Registration extends Component {
    state = {
        username: '',
        usernameError: '',
        confirmPassword: '',
        cpError: '',
        password: '',
        passwordError: '',
        spinner: true,

        usernameList: []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                spinner: !this.state.spinner
            });
        }, 3000);

        firebase.database().ref('Username').on('value', (snapshot) => {
            snapshot.forEach((item) => {
                console.log(item.val().username)
                this.setState((state) => ({
                    usernameList: [...state.usernameList, item.val().username]
                }));
            })
        })
    }

    handleEmail = (text) => {
        this.setState({username: text},
        );
    };
    handleConfirmPassword = (text) => {
        this.setState({confirmPassword: text}, () =>
            this.validatePassword(),
        );
    };
    handlePassword = (text) => {
        this.setState({password: text}, () =>
            this.validatePasswordLength(),
        );
    };

    validatePassword = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                cpError: 'Password is not matching',
            });
            return false
        } else {
            this.setState({
                cpError: '',
            });
            return true
        }

    };
    validatePasswordLength = () => {
        if (this.state.password.length <= 4) {
            this.setState({
                passwordError: 'Password must be at least 4 characters.',
            });
            return false
        } else {
            this.setState({
                passwordError: '',
            });
            return true
        }

    };
    validateUsername = () => {
        if (!this.state.usernameList.includes(this.state.username)) {
            this.setState({
                usernameError: 'Enter valid username',
            });
            return false
        } else {
            this.setState({
                usernameError: '',
            });
            return true
        }
    };

    toLoginIntent = () => {
        let saved = (this.validateUsername() && this.validatePassword() && this.validatePasswordLength());
        if (saved) {
            let key = firebase.database().ref('Login').push().key;
            firebase.database().ref('Login/' + key).set({
                username: this.state.username,
                password: this.state.password
            }, () => {
                ToastAndroid.show('Yeah boyeee!', ToastAndroid.SHORT);
                this.props.navigation.navigate('Login');
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                    color="yellow"
                    animation='fade'

                />
                <View style={styles.topicBackground}>

                    <Text style={styles.topic}>Sign Up</Text>
                </View>
                <ImageBackground source={require('../assets/main2.jpg')} style={styles.body}>
                    <Text style={styles.inputUn}>Username</Text>
                    <Text>Enter given username by Bank</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               onChangeText={this.handleEmail}/>
                    <Text style={styles.errorMsg}>{this.state.usernameError}</Text>

                    <Text style={styles.inputPw}>Password</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               onChangeText={this.handlePassword}
                               secureTextEntry={true}/>
                    <Text style={styles.errorMsg}>{this.state.passwordError}</Text>

                    <Text style={styles.inputPwConfirm}>Confirm Password</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               secureTextEntry={true}
                               onChangeText={this.handleConfirmPassword}/>
                    <Text style={styles.errorMsg}>{this.state.cpError}</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.toLoginIntent()
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topic: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        margin:20
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        paddingTop: 30,
    },
    inputUn: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 18,
    },
    inputPw: {
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 18,
    },
    inputPwConfirm: {
        textAlign: 'center',
        fontSize: 18,
    },
    errorMsg: {
        color: '#800000',
    },
    input: {
        margin: 15,
        width: 230,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor: 'white'

    },
    submitButton: {
        backgroundColor: '#FDC722',
        padding: 10,
        margin: 15,
        width: 150,
        height: 40,
        borderRadius: 10,
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize:15
    },
    registerLink: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    logo: {
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    topicBackground: {
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        // resizeMode: 'center',

        shadowOffset: {width: 10, height: 10},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor: "#FDC723"
    },
    body: {
        alignItems: 'center',
        height: '100%',

    },
});
export default Registration;
