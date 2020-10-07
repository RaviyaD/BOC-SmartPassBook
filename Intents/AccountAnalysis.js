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
import NavBar from "./NavBar";


export default class AccountAnalysis extends Component {

    constructor(props) {
        super(props);

        const array = [
            {
                expanded: false,
                title: '1. Can I view statement in offline mode?',
                body: 'In offline mode, you can see last viewed transaction only',
            },
            {
                expanded: false,
                title: '2. Do I have to pay for Smart Passbook Service?',
                body: 'No. This is a free service to account holders',
            },
            {
                expanded: false,
                title: '3. How can I change my login pin?',
                body: 'Go to settings and change your pin',
            },
        ];


        this.state = {
            AccordionData: [...array],
            text: '',
            drawerPosition:'left',
            setDrawerPosition:'left',
            Ldata:[],
            startDate:"",
            endDate:""
        };

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
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/wallpaper.jpg')}>
                        <Text style={styles.topic}>Bank Statement Analysis</Text>

                        <View style={styles.row}>
                            <View style={styles.inputWrap}>



                            </View>

                            <View style={styles.inputWrap}>

                            </View>


                        </View>

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
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom:50,
        marginTop:100
    },
    greyText: {
        textAlign: 'left',

        fontSize: 18,
        color: '#363636',
        width:'80%',


    },

    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        margin: 15,
        height: 50,
        width:'72%',
        paddingLeft: 15,
        borderRadius: 5,
        borderColor: "#faee52",
        borderWidth: 2,
        fontSize: 18.5,
        fontFamily: 'sans-serif-condensed',
        marginBottom: 30

    },

    submitButton: {
        backgroundColor: '#000000',
        padding: 10,
        margin: 15,
        height: 50,
        width:160,
        borderRadius: 400,
        justifyContent:"center"
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize:16
    },
    row: {
        flex: 1,
        marginLeft:30,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    inputdate: {
        fontSize: 14,
        marginBottom: -12,
        color: "#6a4595"
    },
    inputcvv: {
        fontSize: 14,
        marginBottom: -12,
        color: "#6a4595"
    }
});
