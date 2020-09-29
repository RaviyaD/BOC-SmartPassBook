import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, ImageBackground, StyleSheet, TextInput,ScrollView
} from 'react-native';
import tc from '../assets/const';

class TermsConditions extends Component {
    state = {
        search : ''
    };

    handleSearch = (text) =>{
        this.state({
            search: text
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <Text style={styles.topic}> Terms & conditions </Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               autoCapitalize="none"
                               onChangeText={this.handleName}/>
                    <ScrollView style={styles.scrollView}>
                        <Text>{tc}</Text>

                    </ScrollView>
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
        paddingTop:60,
        fontWeight: 'bold',
        fontSize: 30,
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
    input: {
        margin: 15,
        width: 200,
        height: 40,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
    },
    scrollView:{
        height: 100,
        width: 300,
        fontWeight: 'bold',
    }
});

export default TermsConditions;
