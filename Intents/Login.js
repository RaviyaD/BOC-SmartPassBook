import React from 'react';
import {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground, Image, StatusBar
} from 'react-native';
import * as firebase from "firebase";
import NetInfo from "@react-native-community/netinfo";

class Login extends Component {

    state = {
        email: '',
        password: '',
        usernameError: '',
        isVisible: true,
        loginList: [],
        isConnected: false
    };

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 3000);

        setInterval(() => NetInfo.addEventListener(state => {
            this.setState({isConnected: state.isConnected})
        }), 2000);

        firebase.database().ref('Login').on('value', (snapshot) => {
            snapshot.forEach((item) => {
                console.log(item.val())
                this.setState((state) => ({
                    loginList: [...state.loginList, {
                        username: item.val().username,
                        password: item.val().password
                    }]
                }));
            })
        })
    }

    handleEmail = (text) => {
        this.setState({email: text});
    };
    handlePassword = (text) => {
        this.setState({password: text});
    };
    login = (email, pass) => {
        let login = this.validateUsername();
        //if (login)
        this.props.navigation.navigate('Dashboard');
    };
    toRegisterIntent = (email, pass) => {
        this.props.navigation.navigate('Register');
    };

    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    };

    validateUsername = () => {
        let index = this.state.loginList.findIndex((item) => (
            item.username === this.state.email && item.password === this.state.password
        ));
        if (index < 0) {
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
        let Splash_Screen = (
            <View>
                <Image source={require('../assets/splash-screen.jpg')}
                       style={{width: '100%', height: '100%'}}/>
            </View>);
        let loginView = (
            <View style={styles.container}>
                <View style={styles.topicBackground}>
                    <Image
                        style={styles.bocImage}
                        source={require('../assets/logoBOC.png')}
                    />
                    <View style={styles.innerText}>
                        <Text style={styles.passBookText}>Smart | PassBook</Text>
                    </View>

                </View>

                <ImageBackground source={require('../assets/main.jpg')} style={styles.body}>


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
                        <Text style={styles.submitButtonText}>L O G I N</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerLink} onPress={() => this.toRegisterIntent()}>Register ?</Text>

                        <Image style={styles.bottomView} source={require('../assets/bocBottom.png')}/>

                </ImageBackground>

            </View>
        )
        return (
            <View style={styles.container}>
                {!this.state.isConnected ? <View style={{width: '100%', height: 25, backgroundColor: 'red'}}><Text
                    style={{textAlign: 'center'}}>No Internet Connection</Text></View> : null}
                {
                    (this.state.isVisible === true) ? Splash_Screen : loginView
                }
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bocImage: {
        marginTop: 10,
        height: 60,
        width: 150
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
    innerText: {
        marginBottom: 10
    },
    body: {
        alignItems: 'center',
        height: '100%',

    },
    errorMsg: {
        color: '#800000',
    },
    bocText: {
        fontWeight: 'bold',
        fontSize: 60,
        textAlign: 'center',
        textShadowColor: '#000000',
        color: '#FDDD00',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 10,
    },
    passBookText: {
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        paddingTop: 30,
    },
    inputUn: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 17,
        marginTop:50
    },
    inputPw: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 17,
        marginTop:10
    },
    input: {
        margin: 5,
        width: 230,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor:'white'

    },
    submitButton: {
        backgroundColor: '#FDC722',
        padding: 10,
        alignSelf: 'center',
        margin: 10,
        height: 40,
        width: 180,
        borderRadius: 10,

    },
    submitButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize:15
    },
    registerLink: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize:15
    },
    logo: {
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
    bottomView :{
        marginTop:100,
        width:250,
        height:25
    }
});

export default Login;
