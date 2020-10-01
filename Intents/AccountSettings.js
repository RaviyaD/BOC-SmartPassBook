import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet,
} from 'react-native';

class AccountSettings extends Component {
    state = {
        nickname: '',
        nicknameError: ''
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

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <Text style={styles.topic}> Account Settings</Text>
                    <Text style={styles.AccText}> Account No:
                        {this.props.navigation.state.params.AccountNo}
                    </Text>
                    <Text style={styles.inputUn}> New name :</Text>

                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               onChangeText={this.handleName}/>
                    <Text style={styles.errorMsg}>{this.state.usernameError}</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topic: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    AccText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop:40,
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
    },
    inputUn: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 15,
        color:'#000000'
    },
    greyText: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 15,
        color: '#363636',
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
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountSettings;