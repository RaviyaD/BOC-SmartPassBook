import React from 'react';
import {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet, DrawerLayoutAndroid,
    AppRegistry,
    Button, Dimensions, ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import NotificationPopup from 'react-native-push-notification-popup';
import NavBar from "./NavBar";



import {

    PieChart,

} from 'react-native-chart-kit'

const renderCustomPopup = ({ appIconSource, appTitle, timeText, title, body }) => (
    <View style={{backgroundColor: "white",borderRadius:5,borderWidth:1}}>
        <View style={{backgroundColor: "#FFF",borderRadius:6,borderColor:"#808B96 ",borderWidth:0.8,height:50}}>
            <Text  style={{marginLeft:"5%",marginTop:"5%", fontWeight: 'bold'}}>{appTitle}</Text>
        </View>
        <Text  style={{marginLeft:"5%",marginTop:"5%", fontWeight: 'bold'}}>
            {title}
        </Text>
        <Text  style={{marginLeft:"5%",marginBottom:"5%"}}>
            {body}
        </Text>

    </View>
);


export default class AccountAnalysis extends Component {

    constructor(props) {
        super(props);



        this.state = {
            text: '',
            drawerPosition:'left',
            setDrawerPosition:'left',
            Ldata:[],
            startDate:"2020-05-01",
            endDate:"2020-10-05",
            dataT : [
                { name: 'Payments', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'E-Transfers', population: 2800000, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'ATM-Withdraws', population: 5276126, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Other', population: 11920000, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 }
            ],
            dataD : [
                { name: 'Cheques', population: 615000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'E-Transfers', population: 180000, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Direct-Cash', population: 3276126, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                { name: 'Other', population: 1920000, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 }
            ]
        }

    }
    componentDidMount() {
        this.popup.show({
            onPress: function() {console.log('Pressed')},

            appTitle: 'BOC-Smart Passbook',
            timeText: 'Now',
            title: 'BOC E-Transfers',
            body: 'Purchase R.2000 from Savings account\nREF-17565, Colombo, BOC',
            slideOutTime: 10000
        });
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
        const screenWidth = Dimensions.get('window').width

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={this.state.drawerPosition}
                renderNavigationView={() => this.navigationView()}>

                <View style={styles.container}>
                    <NotificationPopup
                        ref={ref => this.popup = ref}
                        renderPopupContent={renderCustomPopup}
                        shouldChildHandleResponderStart={true}
                        shouldChildHandleResponderMove={true} />
                    <Text style={{color:'white', fontSize:30, marginTop:'15%', marginLeft:'5%'}}>Bank Statement Analysis</Text>
                </View>
                <View style={styles.row}>
                    <DatePicker
                        style={{width: 170}}
                        date={this.state.startDate}
                        mode="date"
                        placeholder="Start Date"
                        format="YYYY-MM-DD"
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
                        onDateChange={(date2) => {this.setState({startDate: date2})}}
                    />
                    <DatePicker
                        style={{width: 170,marginLeft:'3%'}}
                        date={this.state.endDate}
                        mode="date"
                        placeholder="End Date"
                        format="YYYY-MM-DD"
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
                        onDateChange={(date1) => {this.setState({endDate: date1})}}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.greyText}>Beginning Balance : Rs. 40000</Text>
                        <Text style={styles.greyText}>Ending Balance : Rs. 20000</Text>
                    </View>
                </View>

                <Text style={styles.subtopic}>Total Spendings - Rs 30 000</Text>

                <PieChart
                    data={this.state.dataT}
                    width={screenWidth}
                    height={180}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="1"

                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                    }}

                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginRight:90
                    }}
                />

                <Text style={styles.subtopic}>Total Deposits - Rs 10 000</Text>
                <PieChart
                    data={this.state.dataD}
                    width={screenWidth}
                    height={180}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="1"

                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                    }}

                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginRight:90
                    }}
                />

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        height:'20%',
        width: '100%',
        backgroundColor: '#FDC723',
    },

    subtopic: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        marginLeft:'6%'

    },
    greyText: {
        textAlign: 'left',

        fontSize: 18,
        color: '#363636',
        width:'80%',
        marginBottom:10,


    },

    input: {
        margin: 15,
        height: 50,
        width:'72%',
        paddingLeft: 15,
        borderRadius: 5,
        borderColor: "#FDC723",
        borderWidth: 2,
        fontSize: 18.5,
        fontFamily: 'sans-serif-condensed',
        marginBottom: 30

    },
    submitButton: {
        backgroundColor: '#000000',

        height: 45,
        width:220,
        marginTop:10,
        marginLeft:'25%',
        borderRadius: 400,
        justifyContent:"center"
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize:16
    },
    row: {
        marginTop:'5%',
        marginLeft:'6%',
        marginBottom:10,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10,

    },

});
