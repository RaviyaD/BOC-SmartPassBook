
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
import NavBar from "../NavBar";
import MostViews from "./MostViews"

export default class FaqMain extends Component {

    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

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
            searchData: [
                {
                    title: '1. Can I view statement in offline mode?',
                    body: 'In offline mode, you can see last viewed transaction only',
                },
                {
                    title: '2. Do I have to pay for Smart Passbook Service?',
                    body: 'No. This is a free service to account holders',
                },
                {
                    title: '3. How can I change my login pin?',
                    body: 'Go to settings and change your pin',
                },
                {
                    title: '4. Can I name my accounts?',
                    body:
                        'Yes. You can name your accounts with preferred names for easy identification',
                },
            ],
        };

    }

    update_Layout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = this.state.AccordionData.map((item) => {
            const newItem = Object.assign({}, item);

            newItem.expanded = false;

            return newItem;
        });

        array[index].expanded = true;

        this.setState(() => {
            return {
                AccordionData: array,
            };
        });
    };


    searchFilterFunction(searchText, data) {
        let newData = [];
        let returnData =[];
        if (searchText) {
            newData = data.filter(function(item) {
                const itemData = item.title.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.includes(textData);
            });
        }
        this.setState({
            Ldata: newData
        })
    }

    toChatbot = () => {

        this.props.navigation.navigate('Chatbot');

    };
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
                    <ImageBackground style={styles.backgroundImage} source={require('../../assets/wallpaper.jpg')}>
                        <Text style={styles.topic}>FAQs</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Search questions by key word..."
                            placeholderTextColor="#625F56"
                            autoCapitalize="none"
                            onChangeText={(value) => {
                                this.searchFilterFunction(value, this.state.searchData);
                            }}
                        />
                        {this.state.Ldata.map((item, index) => {

                            return <Text style={styles.greyText}>{item.title}</Text>
                        })}
                        <View style={styles.subContainer}>
                            <ScrollView
                                contentContainerStyle={{paddingHorizontal: 10, paddingVertical:5,height: '90%'}}>
                                {this.state.AccordionData.map((item, key) => (
                                    <MostViews
                                        key={key}
                                        onClickFunction={this.update_Layout.bind(this, key)}
                                        item={item}
                                    />
                                ))}
                            </ScrollView>


                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Chatbot', { navigation: navigation})}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}> Ask a Question </Text>
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
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height:"70%"
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
        paddingTop: 20,
        fontSize: 18,
        color: '#363636',
        width:'80%',
        paddingLeft: 15

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
        marginBottom:5

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
});


