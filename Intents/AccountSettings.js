import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet, DrawerLayoutAndroid,
} from 'react-native';
import NavBar from "./NavBar";

class AccountSettings extends Component {
    state = {
        nickname: '',
        nicknameError: '',
        drawerPosition: 'left',
        setDrawerPosition: 'left'
    };
    toDashboard = () => {
        if (this.validateName()) {
            this.props.navigation.navigate('Dashboard', {
                newName: this.state.nickname,
            });
        }
    };

    // function DetailsScreen({ route, navigation }) {
    // /* 2. Get the param */
    // const { itemId } = route.params;
    // const { otherParam } = route.params;

    handleName = (text) => {
        this.setState({
            nickname: text,
        });
    };
    validateName = () => {
        if (this.state.username !== '') {
            this.setState({
                nicknameError: 'Enter a name...',
            });
            return false;
        } else {
            this.setState({
                nicknameError: '',
            });
            return true;
        }
    };
    changeDrawerPosition = () => {
        if (this.state.drawerPosition === 'left') {
            this.setState({
                setDrawerPosition: 'right'
            })
        } else {
            this.setState({
                setDrawerPosition: 'left'
            })
        }
    };

    navigationView = () => (
        <View style={styles.navigationContainer}>
            <NavBar navigation={this.props.navigation}/>
        </View>
    );

    render() {

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={this.state.drawerPosition}
                renderNavigationView={() => this.navigationView()}>
                <View style={styles.container}>
                    <View style={styles.topicBackground}>
                        <Text style={styles.topic}> Account Settings</Text>
                    </View>
                    <ImageBackground source={require('../assets/main3.jpg')} style={styles.body}>
                        <Text style={styles.AccText}> Account No:
                            {this.props.navigation.state.params.AccountNo}
                        </Text>
                        <Text style={styles.inputUn}> New name :</Text>

                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   autoCapitalize="none"
                                   onChangeText={this.handleName}/>
                        <Text style={styles.errorMsg}>{this.state.nicknameError}</Text>
                        <Text style={styles.greyText}>This name only appear on application!</Text>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.toDashboard()
                            }>
                            <Text style={styles.submitButtonText}> Submit </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </DrawerLayoutAndroid>
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
    topic: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        margin:30
    },
    AccText: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 40,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
    },
    inputUn: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 18,
        color: '#000000'
    },
    greyText: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 15,
        color: '#363636',
    },
    input: {
        margin: 15,
        width: 240,
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
        margin: 5,
        height: 40,
        width: 200,
        borderRadius: 10,
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
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

export default AccountSettings;
