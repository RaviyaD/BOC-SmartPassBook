import React, {Component} from 'react';

import {
    ActivityIndicator,
    Alert,
    FlatList,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

//import {Card} from 'react-native-paper'

export default class Chatbot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            Ldata:[],
            data: [
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

        this.arrayholder = [];
    }



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

    getData(){
        this.state.data.map(d=>{

            return <Text style={styles.paragraph}>{d.title}</Text>

        })
    }

    render() {
        return (<View style={styles.container}>
                <Text style={styles.paragraph}>Search Here.</Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Search"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(value) => {
                        this.searchFilterFunction(value, this.state.data);
                    }}
                />


                {this.state.Ldata.map((item, index) => {

                    return <Text style={styles.paragraph}>{item.title}</Text>
                })}

                <TouchableOpacity
                    activeOpacity={.8} //The opacity of the button when it is pressed
                    style = {styles.button}

                >
                    <Text>hii click</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    input: {
        margin: 15,
        height: 40,
        paddingLeft: 10,
        borderRadius: 2,
        borderColor: "#7a42f4",
        borderWidth: 1,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        backgroundColor: 'rgba(20,174,255,0.51)',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 3,
        padding: 5,
        height: 200,
        width: 200,  //The Width must be the same as the height
        borderRadius:400,

    },
});
