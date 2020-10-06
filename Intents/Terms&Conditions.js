import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, ImageBackground, StyleSheet, TextInput, ScrollView, DrawerLayoutAndroid, ToastAndroid
} from 'react-native';
import tc from '../assets/const';
import NavBar from "./NavBar";

class TermsConditions extends Component {
    state = {
        search: '',
        text: tc,
        text1: '',
        text2: '',
        drawerPosition: 'left',
        setDrawerPosition: 'left'
    };

    handleSearch = (text) => {

        let value = text;
        let idx = this.state.text.indexOf(value);

        if(text === ''){
           this.setState({
               search: value,
               text: tc,
               text1: '',
               text2: ''
           })
        }
        else if (idx >= 0) {
            let text = this.state.text.substring(0, idx);
            let text1 = this.state.text.substring(idx, idx + value.length);
            let text2 = this.state.text.substring(idx + value.length);
            this.setState({
                search: value,
                text: text,
                text1: text1,
                text2: text2
            });
        } else {
            this.setState({
                search: value,
                text: tc,
                text1: '',
                text2: ''
            });
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
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                        <Text style={styles.topic}> Terms & conditions </Text>
                        <TextInput style={styles.input}
                                   underlineColorAndroid="transparent"
                                   autoCapitalize="none"
                                   onChangeText={this.handleSearch}
                        />
                        <ScrollView style={styles.scrollView}>
                            <Text>{this.state.text}<Text style={styles.bold}>{this.state.text1}</Text>{this.state.text2}</Text>
                        </ScrollView>
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
    topic: {
        paddingTop: 60,
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
    scrollView: {
        height: 100,
        width: 300,
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
        backgroundColor:'yellow'
    }
});

export default TermsConditions;
