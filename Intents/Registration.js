import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, ToastAndroid,
} from 'react-native';

class Registration extends Component {
    state = {
        username: '',
        usernameError: '',
        confirmPassword: '',
        cpError: '',
        password: '',
        passwordError: '',
    };

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
        if (this.state.username !== 'raveen97') {
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
            ToastAndroid.show('Yeah boyeee!', ToastAndroid.SHORT);
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <Text style={styles.topic}>Sign Up</Text>

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
        fontSize: 15,
    },
    inputPw: {
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 15,
    },
    inputPwConfirm: {
        textAlign: 'center',
        fontSize: 15,
    },
    errorMsg: {
        color: '#800000',
    },
    input: {
        margin: 15,
        width: 200,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
    },
    submitButton: {
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
});
export default Registration;
