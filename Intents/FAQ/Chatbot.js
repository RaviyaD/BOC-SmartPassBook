
import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet, DrawerLayoutAndroid,
    ActivityIndicator,
    Alert,
    FlatList, Platform,
    LayoutAnimation,
    ScrollView,
    UIManager,

} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import NavBar from "../NavBar";


import {dialogflowConfig} from '../env';

const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://i.imgur.com/7k12EPD.png',
};


export default class Chatbot extends Component {



        state = {
            messages: [
                {
                    _id: 1,
                    text:
                        'Hi! I am the FAQ bot 🤖 from BOC.\n\nEnter your question and our team will reply you shortly.',
                    createdAt: new Date(),
                    user: BOT_USER,
                },
            ],
            drawerPosition:'left',
            setDrawerPosition:'left'
        };


    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id,
        );
    }

    handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error),
        );
    }

    sendBotResponse(text) {
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT_USER,
        };

        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, [msg]),
        }));
    }

    changeDrawerPosition = () => {
        if (this.state.drawerPosition === 'left') {
            this.setState({
                setDrawerPosition:'right'
            })
        } else {
            this.setState({
                setDrawerPosition:'left'
            })
        }
    };

    navigationView = () => (
        <View style={styles.navigationContainer}>
            <NavBar navigation={this.props.navigation} />
        </View>
    );

    render() {
        const navigation = this.props.navigation;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={this.state.drawerPosition}
                renderNavigationView={() => this.navigationView()}>
                <View style={styles.container}>

                    <Text style={{color:'white', fontSize:30, marginTop:'25%', marginLeft:'5%',fontWeight: 'bold'}}>We'll Text You...</Text>
                </View>



                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={(messages) => this.onSend(messages)}
                        style={{Color: '#FDC723'}}
                        user={{
                            _id: 1,
                        }}
                    />
                    </View>

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'15%',
        width: '100%',
        backgroundColor: '#FDC723',
    },

    topic: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom:50,
        marginTop:100
    },


    backgroundImage: {
        flex: 1,
        height: '10%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});
