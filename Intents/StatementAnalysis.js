
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
import DatePicker from 'react-native-datepicker';
import PieChart from 'react-native-pie-chart';
import NavBar from "./NavBar";


export default class StatementAnalysis extends Component {

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
        const chart_wh = 250
        const series = [123, 321, 123, 789, 537]
        const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={this.state.drawerPosition}
                renderNavigationView={() => this.navigationView()}>
                <View style={styles.container}>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/wallpaper.jpg')}>
                        <Text style={styles.topic}>Bank Statement Analysis</Text>
                        <View style={styles.row}>
                        <DatePicker
                                    style={{width:250,marginBottom:20,justifyContent:'center'}}
                                    date={this.state.startDate}
                                    mode="date"
                                    placeholder="select start date"
                                    format="YYYY-MM-DD"
                                    minDate="2010-10-06"
                                    maxDate="2020-10-06"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({startDate: date})}}
                                />

                                <DatePicker
                                    style={{width: 250,justifyContent:'center'}}
                                    date={this.state.endDate}
                                    mode="date"
                                    placeholder="select end date"
                                    format="YYYY-MM-DD"
                                    minDate="2020-10-06"
                                    maxDate="2021-10-06"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({endDate: date})}}
                                /> </View>
                        <Text style={styles.greyText}>Beginning Balance: Rs. 15500</Text>
                        <Text style={styles.greyText}>Ending Balance: Rs. 25000</Text>
                        <PieChart
                            chart_wh={chart_wh}
                            series={series}
                            sliceColor={sliceColor}
                            doughnut={true}
                            coverRadius={0.45}
                            coverFill={'#FFF'}
                        />
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
        marginLeft:20,
        fontSize: 18,
        color: '#363636',
        width:'80%',
        justifyContent:'center'

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


