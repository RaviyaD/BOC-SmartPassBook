import React, {Component} from 'react';
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';
import NavBar from "./NavBar";
import Spinner from "react-native-loading-spinner-overlay";
import * as firebase from "firebase";

class AccountList extends Component {

    state = {
        drawerPosition:'left',
        setDrawerPosition:'left',
        spinner: true,
        list1:[],
        list2:[],
        isTrue:false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                spinner: !this.state.spinner
            });
        }, 3000);

        firebase.database().ref('AccountList').on('value', (snapshot) => {
            snapshot.forEach((item) => {
                console.log(item.val())
                if(item.key==='Account'){
                    this.setState({
                        list1:item.val()
                    })
                }else{
                    this.setState({
                        list2:item.val()
                    })
                }
            })
        })

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
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={this.drawerPosition}
                renderNavigationView={() => this.navigationView()}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                    color="yellow"
                    animation='fade'

                />
                <View style={styles.container}>
                    <Text
                        style={{color: 'white', fontSize: 35, marginTop: '17%', marginLeft: '16%', fontWeight: 'bold'}}>ACCOUNT LIST</Text>
                </View>
                <View>
                    <Text style={styles.accName}>Ms. Dulmini</Text>
                    <Dash dashGap={3} style={{width: '90%', height: 1, flexDirection: 'row', marginLeft: '5%'}}/>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('TransactionHistory', {navigation: this.props.navigation,type:'Account',balance:this.state.list2.Balance,id:this.state.list2.ID,at:this.state.list2.Type})}>
                                <View style={styles.accDetails}>
                                    <Text style={styles.accNum}>{this.state.list2? this.state.list2.Name: 'No name'}</Text>
                                    <Text style={styles.accNum}>{this.state.list2? this.state.list2.ID: '8010605'}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.accBalance}>LKR {this.state.list2? this.state.list2.Balance: '25,000'}</Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettings', {
                                            AccountNo: this.state.list2.ID,
                                            navigation: this.props.navigation
                                        })}>
                                            <View onPress={() =>
                                                this.props.navigation.navigate('AccountSettings', {
                                                    AccountNo: this.state.list2.ID,
                                                    navigation: this.props.navigation
                                                })}

                                                  style={styles.istruebutton}>
                                                <Icon name="circle-edit-outline" size={35} color="#828264" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.accType}>{this.state.list2? this.state.list2.Type : 'SAVINGS ACCOUNT'}</Text>
                                </View>
                            </TouchableOpacity>
                    <Dash dashGap={3} style={{width: '90%', height: 1, flexDirection: 'row', marginLeft: '5%'}}/>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('TransactionHistory', {navigation: this.props.navigation,type:'Account1',balance:this.state.list1.Balance,id:this.state.list1.ID,at:this.state.list1.Type})}>
                        <View style={styles.accDetails}>
                            <Text style={styles.accNum}>{this.state.list1? this.state.list1.Name: 'No name'}</Text>
                            <Text style={styles.accNum}>{this.state.list1? this.state.list1.ID: '1020305'}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.accBalance}>LKR {this.state.list1 ? this.state.list1.Balance : '75,000'}</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettings', {
                                    AccountNo: this.state.list2.ID,
                                    navigation: this.props.navigation
                                })}>
                                    <View onPress={() => this.props.navigation.navigate('AccountSettings', {
                                        AccountNo: this.state.list2.ID,
                                        navigation: this.props.navigation
                                    })}
                                          style={styles.istruebutton}>
                                        <Icon name="circle-edit-outline" size={35} color="#828264"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.accType}>{this.state.list1 ? this.state.list1.Type: 'JOINT ACCOUNT'}</Text>
                        </View>
                    </TouchableOpacity>
                    <Dash dashGap={3} style={{width: '90%', height: 3, flexDirection: 'row', marginLeft: '5%'}}/>
                </View>
            </DrawerLayoutAndroid>)
    }
};

const styles = StyleSheet.create({
    container: {
        height:'20%',
        width: '100%',
        backgroundColor: '#faee52',
        borderBottomEndRadius:40,
        borderBottomStartRadius:40
    },
    istruebutton: {
        fontSize: 20,
        borderRadius:30,
        marginTop: '4%',
        marginLeft: '43%',
        width:45,
        height:45,
        padding:4,
        backgroundColor:'#faee52'
    },
    isfalsebutton :{
        fontSize: 20,
        borderRadius:20,
        marginTop: '1%',
        marginLeft: '10%',
        width:80,
        height:50,
        padding:4,
        backgroundColor:'#faee52'
    },
    innerContainer:{
        height:'80%',
        width:'70%',
        marginTop:'30%'
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innercontainer: {
        width: '95%',
        height: '97%',
        backgroundColor: 'white',
        margin: 10,
    },
    navbutton: {
        flex: 1,
        position: 'absolute',
        top: 0,
        margin: 30,
    },
    button: {
        backgroundColor: '#841584',
    },
    title: {
        color: '#000000',
        top: 5,
        marginLeft: '1%',
        marginTop: '10%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    accName: {
        fontSize: 25,
        margin: '5%',
        fontWeight: 'bold',
        color: '#ff9933',
    },
    divider: {
        borderWidth: 3,
        width: '90%',
        marginLeft: '5%',
        borderColor: '#ff9933',
    },
    accNum: {
        fontSize: 20,
    },
    accDetails: {
        marginLeft: '5%',
        marginTop: '2%',

    },
    accBalance: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    accType: {
        fontSize: 15,
        marginBottom: '3%',
    },
    editButton: {
        alignItems: 'center',
        backgroundColor: '#ffffcc',
        padding: 10,
        marginLeft: '5%',
        width: '25%',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ff9933',
    },
    editButtonView: {
        marginTop: '5%',
        marginLeft: '70%',
        justifyContent: 'flex-end',
    },spinnerTextStyle: {
        color: '#FFF'
    }
});

export default AccountList;
