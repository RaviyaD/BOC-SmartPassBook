import React from 'react';
import {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground, ToastAndroid,
} from 'react-native';


class Login extends Component {

    state = {
        email: '',
        password: '',
        usernameError: '',
    };

    handleEmail = (text) => {
        this.setState({email: text});
    };
    handlePassword = (text) => {
        this.setState({password: text});
    };
    login = (email, pass) => {
        let login = this.validateUsername();
        this.props.navigation.navigate('Dashboard');
    };
    toRegisterIntent = (email, pass) => {
        this.props.navigation.navigate('Register');
    };

    validateUsername = () => {
        if (this.state.email !== 'raveen97' || this.state.password !== '12345') {
            this.setState({
                usernameError: 'Username or Password is wrong!',
            });
            return false;
        } else {
            this.setState({
                usernameError: '',
            });
            return true;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <Text style={styles.bocText}>BOC</Text>
                    <Text style={styles.passBookText}>Smart | PassBook</Text>

                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.inputUn}>Username</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               onChangeText={this.handleEmail}/>


                    <Text style={styles.inputPw}>Password</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               type='password'
                               secureTextEntry={true}
                               onChangeText={this.handlePassword}/>
                    <Text style={styles.errorMsg}>{this.state.usernameError}</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                    <Text style={styles.registerLink} onPress={() => this.toRegisterIntent()}>Register ?</Text>
                </ImageBackground>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorMsg: {
        color: '#800000',
    },
    bocText: {
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        textShadowColor: '#000000',
        color: '#ffd800',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 10,
    },
    passBookText: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        fontStyle: 'italic',
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
        paddingTop: 20,
        fontSize: 15,
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
        height: 40,
        width:150,
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

export default Login;
